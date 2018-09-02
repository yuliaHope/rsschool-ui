export enum AssignmentStatus {
    Assigned = 'Assigned',
    ReadyForReview = 'ReadyForReview',
    Rejected = 'Rejected',
    Checked = 'Checked',
}

export interface IAssignment {
    assignmentRepo: string;
    checkDate?: number;
    completeDate?: number;
    courseId: string;
    deadlineDate: number;
    mentorComment: string;
    mentorId: string;
    score: number;
    status: AssignmentStatus;
    studentComment: string;
    studentId: string;
    taskId: string;
    title: string;
    urlToDescription?: string;
    whoChecks?: string;
}

export interface IAssignmentDocument extends IAssignment {
    _id: number;
}
