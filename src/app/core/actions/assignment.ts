import { ASSIGNMENT } from '../constants';
import { getAssignmentsById, submitSolutionApi } from '../api';
import { IAssignment } from '../models';

export function fetchAssignments(courseId: string, studentId: string) {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.LOADING,
        });

        try {
            const assignmentResult = await getAssignmentsById(courseId, studentId);
            dispatch({
                type: ASSIGNMENT.FETCH_ASSIGNMENTS_OK,
                payload: assignmentResult,
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
            const assignmentResult = await submitSolutionApi(assignment);
            dispatch({
                type: ASSIGNMENT.SUBMIT_SOLUTION_OK,
                payload: assignmentResult,
            });
        } catch (e) {
            dispatch({
                type: ASSIGNMENT.FAIL,
                payload: e,
            });
        }
    };
}
