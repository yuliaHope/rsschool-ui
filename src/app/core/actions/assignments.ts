import { ASSIGNMENT } from '../constants';
import { getAssignmentsByCourseId, submitAssignmentApi } from '../api';
import { INormalizeAssignment } from '../reducers/assignments';

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

export function updateAssignment(assignment: INormalizeAssignment) {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.LOADING,
        });

        try {
            const result = await submitAssignmentApi(assignment.assignment);
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
