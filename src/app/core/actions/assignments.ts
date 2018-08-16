import { ASSIGNMENT } from '../constants';
import { getAssignmentsAndTasksByCourseId, submitSolutionApi } from '../api';
import { IAssignmentDocument } from '../models';

export function fetchAssignments(data: any) {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.LOADING,
        });

        try {
            const result = await getAssignmentsAndTasksByCourseId(data.courseId, data.userId);
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

export function submitSolution(assignment: IAssignmentDocument) {
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
