import { ASSIGNMENT } from '../constants';
import { IAssignment } from '../models';
import { Action } from '../util';

export type AssignmentState = {
    data: IAssignment[];
};

const initialState: AssignmentState = {
    data: [],
};

export function assignmentReducer(state = initialState, action: Action<any>): AssignmentState {
    switch (action.type) {
        case ASSIGNMENT.FETCH_ALL_ASSIGNMENTS_OK: {
            return {
                ...state,
                data: action.payload,
            };
        }
        case ASSIGNMENT.UPDATE_ALL_ASSIGNMENTS_OK: {
            return {
                ...state,
                data: action.payload,
            };
        }
    }
    return state;
}
