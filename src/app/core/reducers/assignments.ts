import { IScheduleAction } from '../util';
import { IAssignmentDocument } from '../models';
import { ASSIGNMENT } from '../constants';

export type AssignmentsState = {
    assignments: IAssignmentDocument[];
    error: Error | undefined;
};

const initialState: AssignmentsState = {
    assignments: [],
    error: undefined,
};

export function assignmentsReducer(state = initialState, action: IScheduleAction): AssignmentsState {
    switch (action.type) {
        case ASSIGNMENT.FETCH_USER_ASSIGNMENTS_OK: {
            const { assignments } = action.payload;
            return {
                ...state,
                error: undefined,
                assignments,
            };
        }
        case ASSIGNMENT.SUBMIT_USER_SOLUTION_OK: {
            const result = action.payload;
            const assignments = state.assignments.map(assignment => {
                return assignment._id === result._id ? result : assignment;
            });
            return {
                ...state,
                assignments,
            };
        }
        default:
            return state;
    }
}
