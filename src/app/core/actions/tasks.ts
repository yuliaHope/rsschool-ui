import {
    TASKS_DATA_REQUEST,
    TASKS_DATA_FAILED,
    TASKS_DATA_SUCCESS,
    SEND_USER_SOLUTION,
    SET_MARK_SOLUTION,
    SET_SOLUTION_FAILED,
    TasksData,
} from '../constants';
import { pause } from '../util';

export function fetchTasks(courseId: string) {
    return async (dispatch: any) => {
        dispatch({
            type: TASKS_DATA_REQUEST,
            payload: true,
        });
        try {
            await pause();
            // throw  Error();
            dispatch({
                type: TASKS_DATA_SUCCESS,
                payload: { data: TasksData, loading: false, error: undefined, id: courseId },
            });
        } catch (e) {
            dispatch({
                type: TASKS_DATA_FAILED,
                payload: { error: e, loading: false },
            });
        }
    };
}
export function fetchSolution(taskId: string, courseId: string) {
    return async (dispatch: any) => {
        dispatch({
            type: SEND_USER_SOLUTION,
            payload: { id: taskId, error: undefined, idCourse: courseId },
        });
        try {
            // when i write backEnd Api, i will remove this action
            await pause();
            dispatch({
                type: SET_MARK_SOLUTION,
                payload: { id: taskId, error: undefined },
            });
        } catch (e) {
            dispatch({
                type: SET_SOLUTION_FAILED,
                payload: e,
            });
        }
    };
}
