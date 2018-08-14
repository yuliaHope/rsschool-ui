import { AnyAction } from 'redux';
import { SCHEDULE } from './constants';
import { IEventDocument, IStageDocument, IAssignments } from './models';

interface ILoadingAction {
    type: SCHEDULE.LOADING;
}

interface IFetchCourseEventsAndStagesOkAction {
    type: SCHEDULE.FETCH_COURSE_EVENTS_AND_STAGES_OK;
    payload: {
        events: IEventDocument[];
        stages: IStageDocument[];
    };
}

interface IFailAction {
    type: SCHEDULE.FAIL;
    payload: Error;
}

interface IAddCourseStageOkAction {
    type: SCHEDULE.ADD_COURSE_STAGE_OK;
    payload: IStageDocument;
}

interface IUpdateCourseStageOkAction {
    type: SCHEDULE.UPDATE_COURSE_STAGE_OK;
    payload: IStageDocument;
}

interface IDeleteCourseStageOkAction {
    type: SCHEDULE.DELETE_COURSE_STAGE_OK;
    payload: string;
}

interface IAddCourseEventOkAction {
    type: SCHEDULE.ADD_COURSE_EVENT_OK;
    payload: IEventDocument;
}

interface IUpdateCourseEventOkAction {
    type: SCHEDULE.UPDATE_COURSE_EVENT_OK;
    payload: IEventDocument;
}

interface IDeleteCourseEventOkAction {
    type: SCHEDULE.DELETE_COURSE_EVENT_OK;
    payload: string;
}

export type IScheduleAction =
    | ILoadingAction
    | IFailAction
    | IFetchCourseEventsAndStagesOkAction
    | IAddCourseStageOkAction
    | IUpdateCourseStageOkAction
    | IDeleteCourseStageOkAction
    | IAddCourseEventOkAction
    | IUpdateCourseEventOkAction
    | IDeleteCourseEventOkAction;

export interface Action<T> extends AnyAction {
    type: string;
    payload?: T;
}
const TIME_PAUSE = 1500;
export const pause = async () => {
    return new Promise(resolve => {
        setTimeout(resolve, TIME_PAUSE);
    });
};
export const setSolutionStatus = (id: string, arr: Array<IAssignments>) => {
    const newArr = [...arr];
    newArr.forEach(elem => {
        if (elem.taskId === id) {
            elem.status = 'ReadyForReview';
        }
    });
    return newArr;
};
export const setSolutionMark = (id: string, arr: Array<IAssignments>) => {
    const newArr = [...arr];
    newArr.forEach(elem => {
        if (elem.taskId === id) {
            elem.status = 'Checked';
            elem.score = Math.floor(Math.random() * 101);
        }
    });
    return newArr;
};
