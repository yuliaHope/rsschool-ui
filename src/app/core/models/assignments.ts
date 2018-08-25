export enum IAssignmentStatus {
    Assigned = 'Assigned',
    ReadyForReview = 'ReadyForReview',
    Rejected = 'Rejected',
    Checked = 'Checked',
}

export interface IAssignment {
    taskId: string;
    courseId: string;
    studentId: string;
    status: IAssignmentStatus;
    mentorId: string;
    studentComment?: string;
    mentorComment?: string;
    score: number;
    assignmentRepo: string;
    deadlineDate: Date;
    completeDate: number;
    checkDate: number;
}
