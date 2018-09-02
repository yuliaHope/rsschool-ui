import {
    ASSIGNMENTS_DATA_REQUEST,
    ASSIGNMENTS_DATA_FAILED,
    ASSIGNMENTS_DATA_SUCCESS,
    SEND_USER_SOLUTION,
    SET_MARK_SOLUTION,
    SET_SOLUTION_FAILED,
} from '../constants';
import { IAssignmentModel } from 'core/models';
import { getAssignments, patchAssignments } from '../api';

export function fetchAssignments(courseId: string) {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENTS_DATA_REQUEST,
            payload: true,
        });
        try {
            const result = await getAssignments(courseId);
            dispatch({
                type: ASSIGNMENTS_DATA_SUCCESS,
                payload: { data: result },
            });
        } catch (e) {
            dispatch({
                type: ASSIGNMENTS_DATA_FAILED,
                payload: { error: e, loading: false },
            });
        }
    };
}

export function fetchSolution(assignment: IAssignmentModel) {
    return async (dispatch: any) => {
        dispatch({
            type: SEND_USER_SOLUTION,
        });
        try {
            await patchAssignments(assignment);
            const result = await getAssignments(assignment.courseId);
            dispatch({
                type: SET_MARK_SOLUTION,
                payload: { data: result, error: undefined },
            });
        } catch (e) {
            dispatch({
                type: SET_SOLUTION_FAILED,
                payload: e,
            });
        }
    };
}
