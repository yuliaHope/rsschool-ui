import { ASSIGNMENT } from 'core/constants';
// import { getAssignments, updateAssignments } from 'core/api';
// import { updateAssignments } from 'core/api';

// import { IAssignment } from 'core/models';

export function fetchAssignments() {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.FETCH_ALL_ASSIGNMENTS,
        });
        try {
            // const data: IAssignment[] = await getAssignments();
            const result = [
                {
                    taskId: 'Assignment',
                    courseId: '123',
                    studenId: '123',
                    status: 'Assigned',
                    mentorId: '123',
                    studenComment: '123',
                    mentorComment: '123',
                    score: 0,
                    assignmentRepo: 'github.com/loveTriangle',
                    deadlineDate: new Date(2018, 9, 30, 23, 59),
                    completeDate: 123,
                    checkDate: 123,
                },
            ];

            dispatch({
                type: ASSIGNMENT.FETCH_ALL_ASSIGNMENTS_OK,
                payload: result,
            });
        } catch (err) {
            dispatch({
                type: ASSIGNMENT.FETCH_ALL_ASSIGNMENTS_FAIL,
            });
        }
    };
}

export function updateUserAssignments() {
    return async (dispatch: any) => {
        dispatch({
            type: ASSIGNMENT.UPDATE_ALL_ASSIGNMENTS,
        });

        try {
            // const result = await updateAssignments('', data);
            const result = [
                {
                    taskId: 'Assignment',
                    courseId: '123',
                    studenId: '123',
                    status: 'Checked',
                    mentorId: '123',
                    studenComment: '123',
                    mentorComment: '123',
                    score: 100,
                    assignmentRepo: 'github.com/loveTriangle',
                    deadlineDate: new Date(2018, 9, 30, 23, 59),
                    completeDate: Date.now(),
                    checkDate: 123,
                },
            ];

            dispatch({
                type: ASSIGNMENT.UPDATE_ALL_ASSIGNMENTS_OK,
                payload: result,
            });
        } catch (e) {
            dispatch({
                type: ASSIGNMENT.UPDATE_ALL_ASSIGNMENTS_FAIL,
            });
        }
    };
}
