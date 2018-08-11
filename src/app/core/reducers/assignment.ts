import { IAssignmentDocument } from '../models';
import { ASSIGNMENT } from '../constants';
import { Action } from '../util';

export type AssignmentsState = {
    assignments: IAssignmentDocument[];
    error: Error | undefined;
};

const initialState: AssignmentsState = {
    assignments: [],
    error: undefined,
};

export function assignmentReducer(state = initialState, action: Action<any>): AssignmentsState {
    switch (action.type) {
        case ASSIGNMENT.FETCH_ASSIGNMENTS_OK: {
            return {
                ...state,
                assignments: action.payload,
            };
        }
        default:
            return state;
    }
}
