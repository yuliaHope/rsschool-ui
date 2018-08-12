import { TASKS_DATA_REQUEST, TASKS_DATA_FAILED, TASKS_DATA_SUCCESS, TasksData } from '../constants';
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
