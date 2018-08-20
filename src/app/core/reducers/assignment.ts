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
                assignments: action.payload.data.data,
                isLoading: false,
            };
        }
        case ASSIGNMENT.SUBMIT_SOLUTION_OK: {
            const { assignments } = state;
            return {
                ...state,
                assignments: assignments.map((item: any) => {
                    if (item.taskId === action.payload.taskId) {
                        return {
                            ...item,
                            ...action.payload,
                        };
                    }
                    return item;
                }),
                isLoading: false,
            };
        }
        case ASSIGNMENT.LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ASSIGNMENT.FAIL: {
            return {
                ...state,
                isLoading: false,
                error: new Error(),
            };
        }
        default:
            return state;
    }
}
