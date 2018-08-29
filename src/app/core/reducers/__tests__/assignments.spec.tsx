import { assignmentReducer, AssignmentsState } from '../assignment';
import { ASSIGNMENT } from '../../constants';
import { IAssignment, AssignmentStatus } from '../../models';

const initialState: AssignmentsState = {
    assignments: [],
    error: undefined,
    isLoading: true,
};

const testAssignments: IAssignment[] = [
    {
        taskId: 11,
        courseId: 'string',
        studentId: 'string',
        mentorId: 'string',
        studentComment: 'string',
        mentorComment: 'string',
        score: 0,
        assignmentRepo: 'string',
        deadlineDate: 0,
        completeDate: 0,
        checkDate: 0,
        status: AssignmentStatus.Assigned,
    },
    {
        taskId: 12,
        courseId: 'string',
        studentId: 'string',
        mentorId: 'string',
        studentComment: 'string',
        mentorComment: 'string',
        score: 0,
        assignmentRepo: 'string',
        deadlineDate: 0,
        completeDate: 0,
        checkDate: 0,
        status: AssignmentStatus.Assigned,
    },
];

const responseAssignment: IAssignment = {
    taskId: 12,
    courseId: 'string',
    studentId: 'string',
    mentorId: 'string',
    studentComment: 'string',
    mentorComment: 'string',
    score: 100,
    assignmentRepo: 'string',
    deadlineDate: 0,
    completeDate: 0,
    checkDate: 0,
    status: AssignmentStatus.Checked,
};

describe('Assignment reducer', () => {
    it('returns the initial state', () => {
        expect(assignmentReducer(undefined, { type: '' })).toEqual(initialState);
    });

    it('handles fetching assignments', () => {
        expect(
            assignmentReducer(initialState, {
                type: ASSIGNMENT.FETCH_ASSIGNMENTS_OK,
                payload: testAssignments,
            }),
        ).toEqual({
            ...initialState,
            assignments: testAssignments,
            isLoading: false,
        });
    });

    it('handles submiting assignment', () => {
        expect(
            assignmentReducer(initialState, {
                type: ASSIGNMENT.SUBMIT_SOLUTION_OK,
                payload: responseAssignment,
            }),
        ).toEqual({
            ...initialState,
            assignments: [],
            isLoading: false,
        });
    });

    it('handles assignments loading', () => {
        expect(assignmentReducer(initialState, { type: ASSIGNMENT.LOADING })).toEqual({
            ...initialState,
            isLoading: true,
        });
    });

    it('handles assignment error', () => {
        expect(assignmentReducer(initialState, { type: ASSIGNMENT.FAIL })).toEqual({
            ...initialState,
            isLoading: false,
            error: new Error(),
        });
    });
});
