import {
    TASKS_DATA_REQUEST,
    TASKS_DATA_FAILED,
    TASKS_DATA_SUCCESS,
    SEND_USER_SOLUTION,
    SET_MARK_SOLUTION,
    SET_SOLUTION_FAILED,
    TasksData,
} from '../constants';
import { Action, setSolutionStatus, setSolutionMark } from '../util';
import { ITaskData } from 'core/models';
export type TasksState = {
    tasks?: Array<ITaskData>;
    loading: boolean;
    error?: any;
    solutionError?: any;
};

const initialState: TasksState = {
    tasks: [],
    loading: false,
    error: undefined,
    solutionError: undefined,
};

export function tasksReducer(state = initialState, action: Action<any>): TasksState {
    switch (action.type) {
        case TASKS_DATA_REQUEST: {
            return {
                loading: action.payload,
            };
        }
        case TASKS_DATA_FAILED: {
            return {
                tasks: [],
                error: action.payload.error,
                loading: action.payload.loading,
            };
        }
        case TASKS_DATA_SUCCESS: {
            return {
                tasks: action.payload.data,
                loading: action.payload.loading,
                error: action.payload.error,
            };
        }
        case SEND_USER_SOLUTION: {
            const newData = setSolutionStatus(action.payload.id, TasksData);
            return {
                tasks: newData,
                loading: false,
                solutionError: undefined,
            };
        }
        case SET_MARK_SOLUTION: {
            const newData = setSolutionMark(action.payload.id, TasksData);
            return {
                tasks: newData,
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
