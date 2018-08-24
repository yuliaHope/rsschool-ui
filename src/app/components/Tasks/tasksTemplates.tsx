import { FeedActions, IAssignment, IAssignmentStatus } from 'core/models';
import * as React from 'react';
import CardChecked from './CardChecked';
import CardRejected from './CardRejected';

export const tasksTemplates: any = {
    [FeedActions.ASSIGN_TASK]: {
        [IAssignmentStatus.Checked]: (assignment: IAssignment): any => {
            return (
                <CardChecked
                    score={assignment.score}
                    title={assignment.taskId}
                    description={assignment.assignmentRepo}
                />
            );
        },
        [IAssignmentStatus.Rejected]: (assignment: IAssignment): any => {
            return <CardRejected title={assignment.taskId} description={assignment.assignmentRepo} />;
        },
    },
};
