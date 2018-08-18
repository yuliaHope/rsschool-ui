import { ASSIGNMENT } from '../constants';
import { getAssignmentsByCourseId, submitAssignmentApi } from '../api';
import { IAssignmentDocument } from '../models';

export function fetchAssignments(courseId: string) {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.LOADING,
        });

        try {
            const result = await getAssignmentsByCourseId(courseId);
            dispatch({
                type: ASSIGNMENT.FETCH_COURSE_USER_ASSIGNMENTS_OK,
                payload: result,
            });
        } catch (e) {
            dispatch({
                type: ASSIGNMENT.FAIL,
                payload: e,
            });
        }
    };
}

export function updateAssignment(assignment: IAssignmentDocument) {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.LOADING,
        });

        try {
            const result = await submitAssignmentApi(assignment);
            dispatch({
                type: ASSIGNMENT.UPDATE_ASSIGNMENT_OK,
                payload: result,
            });
        } catch (e) {
            dispatch({
                type: ASSIGNMENT.FAIL,
                payload: e,
            });
        }
    };
}
