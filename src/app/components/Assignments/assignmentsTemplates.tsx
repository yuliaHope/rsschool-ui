import { IAssignment, IAssignmentStatus } from 'core/models';
import * as React from 'react';
import { classNames } from 'core/styles';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const cn = classNames(require('./index.scss'));

export enum FeedActions {
    'Assignment' = 'Assignment',
}

export const assignmentTemplates: any = {
    [FeedActions.Assignment]: {
        [IAssignmentStatus.Checked]: (feedRecord: IAssignment): any => {
            if (feedRecord.score >= 100) {
                return (
                    <div>
                        <Card className={cn('card-success border-success')}>
                            <CardHeader className={cn('bg-success text-white')}>
                                Done! <span className={cn('score-success')}>{feedRecord.score}%</span>
                            </CardHeader>
                            <CardBody className={cn('card-success-body')}>
                                <CardTitle className={cn('card-success-title')}>{feedRecord.taskId}</CardTitle>
                                <CardText>{feedRecord.assignmentRepo}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            } else if (feedRecord.score <= 50) {
                return (
                    <Card className={cn('card-warning border-warning')}>
                        <CardHeader className={cn('bg-warning text-white')}>
                            Not submitted yet! <span className={cn('score-warning')}>{feedRecord.score}%</span>
                        </CardHeader>
                        <CardBody className={cn('card-warning-body')}>
                            <CardTitle className={cn('card-warning-title')}>{feedRecord.taskId}</CardTitle>
                            <CardText>{feedRecord.assignmentRepo}</CardText>
                        </CardBody>
                    </Card>
                );
            }
        },
        [IAssignmentStatus.Rejected]: (feedRecord: IAssignment): any => {
            return (
                <div>
                    <Card className={cn('card-danger border-danger')}>
                        <CardHeader className={cn('bg-danger text-white')}>The deadline has passed</CardHeader>
                        <CardBody className={cn('card-danger-body')}>
                            <CardTitle className={cn('card-danger-title')}>{feedRecord.taskId}</CardTitle>
                            <CardText>{feedRecord.assignmentRepo}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        },
    },
};
