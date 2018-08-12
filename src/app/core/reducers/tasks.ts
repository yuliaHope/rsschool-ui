import { TASKS_DATA_REQUEST, TASKS_DATA_FAILED, TASKS_DATA_SUCCESS } from '../constants';
import { Action } from '../util';
import { ITaskData } from 'core/models';
export type TasksState = {
    tasks?: Array<ITaskData>;
    loading: boolean;
    error?: any;
};

const initialState: TasksState = {
    tasks: [],
    loading: false,
    error: undefined,
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
        default:
            return state;
    }
}
