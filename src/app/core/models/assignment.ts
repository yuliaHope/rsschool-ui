export enum AssignmentStatus {
    Assigned = 'Assigned',
    ReadyForReview = 'ReadyForReview',
    Rejected = 'Rejected',
    Checked = 'Checked',
}

export interface IAssignment {
    taskId: number;
    courseId: string;
    studentId: string;
    mentorId: string;
    studentComment: string;
    mentorComment: string;
    score: number;
    assignmentRepo: string;
    deadlineDate: number;
    completeDate: number;
    checkDate: number;
    status: AssignmentStatus;
    [key: number]: any;
}

export interface IAssignmentDocument extends IAssignment {
    _id: string;
}
