import { IScheduleAction } from '../util';
import { IAssignmentDocument } from '../models';
import { NormalizeAssignmentsData, getNormalizeAssignmentsData } from '../helpers';
import { ASSIGNMENT } from '../constants';

export type AssignmentsState = {
    assignments: IAssignmentDocument[];
    error: Error | undefined;
    normalizeData: NormalizeAssignmentsData[];
};

const initialState: AssignmentsState = {
    assignments: [],
    error: undefined,
    normalizeData: [],
};

export function assignmentsReducer(state = initialState, action: IScheduleAction): AssignmentsState {
    switch (action.type) {
        case ASSIGNMENT.FETCH_USER_ASSIGNMENTS_OK: {
            const { assignments } = action.payload;
            return {
                ...state,
                error: undefined,
                assignments,
                normalizeData: getNormalizeAssignmentsData(assignments),
            };
        }
        case ASSIGNMENT.SUBMIT_USER_SOLUTION_OK: {
            const result = action.payload;
            const assignments = state.normalizeData[0].assignments.map(assignment => {
                return assignment.assignment._id === result._id ? result : assignment.assignment;
            });
            return {
                ...state,
                normalizeData: getNormalizeAssignmentsData(assignments),
            };
        }
        default:
            return state;
    }
}
