import { IEventDocument } from './events';

export enum IAssignmentStatus {
    Assigned = 'Assignet',
    ReadyForReview = 'ReadyForReview',
    Rejected = 'Rejected',
    Checked = 'Checked',
}

export interface IAssignment {
    // taskId: Array<IEventDocument>;
    taskId: string;
    courseId: string;
    studenId: string;
    status: IAssignmentStatus;
    mentorId: Array<IEventDocument>;
    studenComment?: string;
    mentorComment?: string;
    score: number;
    assignmentRepo: string;
    deadlineDate: Date;
    completeDate: number;
    checkDate: number;
}
