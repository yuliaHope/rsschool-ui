export enum AssignmentStatus {
    Assigned = 'Assigned',
    Checked = 'Checked',
    Rejected = 'Rejected',
    ReadyForReview = 'ReadyForReview',
}

export interface IAssignment {
    taskId: string;
    title: string;
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
}

export interface IAssignmentModel extends IAssignment {
    _id: string;
}
