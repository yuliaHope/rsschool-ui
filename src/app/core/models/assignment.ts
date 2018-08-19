export enum AssignmentStatus {
    Assigned = 'Assigned',
    ReadyForReview = 'ReadyForReview',
    Rejected = 'Rejected',
    Checked = 'Checked',
}

export enum AssignmentTitle {
    Assigned = 'Not submitted yet!',
    ReadyForReview = 'Ready For Review',
    Rejected = 'The deadline has passed!',
    Checked = 'Done',
}

export enum AssignmentStyle {
    Assigned = 'secondary',
    ReadyForReview = 'warning',
    Rejected = 'danger',
    Full = 'success',
    Half = 'warning',
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
}

export interface IAssignmentDocument extends IAssignment {
    _id: string;
}
