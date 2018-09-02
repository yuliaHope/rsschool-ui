import {
    ASSIGNMENTS_DATA_REQUEST,
    ASSIGNMENTS_DATA_FAILED,
    ASSIGNMENTS_DATA_SUCCESS,
    SEND_USER_SOLUTION,
    SET_MARK_SOLUTION,
    SET_SOLUTION_FAILED,
} from '../constants';
import { Action } from '../util';
import { IAssignment } from 'core/models';
export type AssignmentsState = {
    assignments?: Array<IAssignment>;
    loading: boolean;
    error?: any;
    solutionError?: any;
};

const initialState: AssignmentsState = {
    assignments: [],
    loading: false,
    error: undefined,
    solutionError: undefined,
};

export function assignmentsReducer(state = initialState, action: Action<any>): AssignmentsState {
    switch (action.type) {
        case ASSIGNMENTS_DATA_REQUEST: {
            return {
                loading: action.payload,
            };
        }
        case ASSIGNMENTS_DATA_FAILED: {
            return {
                assignments: [],
                error: action.payload.error,
                loading: action.payload.loading,
            };
        }
        case ASSIGNMENTS_DATA_SUCCESS: {
            return {
                assignments: action.payload.data,
                loading: action.payload.loading,
                error: action.payload.error,
            };
        }
        case SEND_USER_SOLUTION: {
            return {
                ...state,
                loading: false,
                solutionError: undefined,
            };
        }
        case SET_MARK_SOLUTION: {
            return {
                assignments: action.payload.data,
                loading: false,
                solutionError: action.payload.error,
            };
        }
        case SET_SOLUTION_FAILED: {
            return {
                ...state,
                loading: false,
                solutionError: action.payload,
            };
        }
        default:
            return state;
    }
}
