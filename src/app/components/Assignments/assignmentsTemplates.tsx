import { IAssignment, IAssignmentStatus } from 'core/models';
import * as React from 'react';
import CardChecked from './CardChecked';
import CardRejected from './CardRejected';

export enum FeedActions {
    'Assignment' = 'Assignment',
}

export const assignmentTemplates: any = {
    [FeedActions.Assignment]: {
        [IAssignmentStatus.Checked]: (feedRecord: IAssignment): any => {
            return (
                <CardChecked
                    score={feedRecord.score}
                    title={feedRecord.taskId}
                    description={feedRecord.assignmentRepo}
                />
            );
        },
        [IAssignmentStatus.Rejected]: (feedRecord: IAssignment): any => {
            return <CardRejected title={feedRecord.taskId} description={feedRecord.assignmentRepo} />;
        },
    },
};
