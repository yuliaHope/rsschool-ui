import { IAssignmentDocument } from '../models';
import { ASSIGNMENT } from '../constants';
import { Action } from '../util';

export type AssignmentsState = {
    isLoading: boolean;
    assignments: IAssignmentDocument[];
    error: Error | undefined;
};

const initialState: AssignmentsState = {
    assignments: [],
    error: undefined,
    isLoading: true,
};

export function assignmentReducer(state = initialState, action: Action<any>): AssignmentsState {
    switch (action.type) {
        case ASSIGNMENT.FETCH_ASSIGNMENTS_OK: {
            return {
                ...state,
                assignments: action.payload,
                isLoading: false,
            };
        }
        case ASSIGNMENT.LOADING: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
