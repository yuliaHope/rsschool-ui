import { ASSIGNMENT } from '../constants';
import { getAssignmentsByCourseId, submitSolutionApi } from '../api';
import { IAssignment } from '../models';

export function fetchAssignments(courseId: string) {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.LOADING,
        });

        try {
            const result = await getAssignmentsByCourseId(courseId);
            dispatch({
                type: ASSIGNMENT.FETCH_USER_ASSIGNMENTS_OK,
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

export function submitSolution(assignment: IAssignment) {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.LOADING,
        });

        try {
            const result = await submitSolutionApi(assignment);
            dispatch({
                type: ASSIGNMENT.SUBMIT_USER_SOLUTION_OK,
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
