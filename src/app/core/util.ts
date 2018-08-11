import { AnyAction } from 'redux';

import { SCHEDULE, ASSIGNMENT } from './constants';
import { IEventDocument, IStageDocument, IAssignmentDocument } from './models';

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

interface IFetchAssignmentsOkAction {
    type: ASSIGNMENT.FETCH_ASSIGNMENTS_OK;
    payload: {
        assignments: IAssignmentDocument[];
    };
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
    | IDeleteCourseEventOkAction
    | IFetchAssignmentsOkAction;

export interface Action<T> extends AnyAction {
    type: string;
    payload?: T;
}
