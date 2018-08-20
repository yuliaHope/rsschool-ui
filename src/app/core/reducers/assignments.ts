import { IScheduleAction } from '../util';
import { ASSIGNMENT } from '../constants';
import { IAssignmentDocument } from '../models';

export type INormalizeAssignment = {
    isEndAssignment: boolean;
    isActiveAssignment: boolean;
    assignment: IAssignmentDocument;
};

export type AssignmentsState = {
    assignments: INormalizeAssignment[];
    error: Error | undefined;
    isLoading: boolean;
};

const initialState: AssignmentsState = {
    assignments: [],
    error: undefined,
    isLoading: false,
};

export function assignmentsReducer(state = initialState, action: IScheduleAction): AssignmentsState {
    switch (action.type) {
        case ASSIGNMENT.LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ASSIGNMENT.FETCH_COURSE_USER_ASSIGNMENTS_OK: {
            const { assignments } = action.payload;
            return {
                ...state,
                error: undefined,
                assignments,
                isLoading: false,
            };
        }
        case ASSIGNMENT.UPDATE_ASSIGNMENT_OK: {
            const assignmentId = action.payload._id;
            const assignments = state.assignments.map(
                (assignmentItem: INormalizeAssignment) =>
                    assignmentId === assignmentItem.assignment._id
                        ? { ...assignmentItem, assignment: { ...assignmentItem.assignment, ...action.payload } }
                        : assignmentItem,
            );
            return {
                ...state,
                assignments: assignments,
                isLoading: false,
            };
        }
        default:
            return state;
    }
}
