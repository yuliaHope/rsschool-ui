import { IScheduleAction } from '../util';
import { ASSIGNMENT } from '../constants';

export type AssignmentsState = {
    assignments: any;
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
                (assignment: any) => (assignmentId === assignment._id ? action.payload : assignment),
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
