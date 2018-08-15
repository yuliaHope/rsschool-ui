import * as React from 'react';
import { Card, CardHeader } from 'reactstrap';
import { classNames } from 'core/styles';
import { IAssignmentDocument } from 'core/models';
import './index.scss';

import AssignmentItemBody from './AssignmentItemBody';
import AssignmentItemForm from './AssignmentItemForm';

const cn = classNames(require('./index.scss'));

type AssignmentItemProps = {
    assignment: IAssignmentDocument;
    isEndAssignment: boolean;
    submitSolution: (assignment: IAssignmentDocument) => void;
};

class AssignmentItem extends React.PureComponent<AssignmentItemProps> {
    handleSubmitSolution = () => {
        const { submitSolution, assignment } = this.props;
        submitSolution(assignment);
    };

    render() {
        const { status, score } = this.props.assignment;
        const { isEndAssignment } = this.props;
        return (
            <Card
                className={`bm-3 mb-4 flex-grow-0 flex-shrink-1 ${cn('card')} bg-secondary ${
                    status === 'Checked' && score < 100
                        ? 'border-warning'
                        : status === 'Checked' && score === 100
                            ? `border-success`
                            : null
                }`}
            >
                {isEndAssignment ? (
                    <CardHeader className="text-white bg-danger">The deadline has passed!</CardHeader>
                ) : status === 'Assigned' ? (
                    <CardHeader>Not submitted yet!</CardHeader>
                ) : status === 'Checked' && score < 100 ? (
                    <CardHeader className="text-white bg-warning">
                        Not submitted yet!
                        <span className={cn('score')}>{score}%</span>
                    </CardHeader>
                ) : status === 'Checked' && score === 100 ? (
                    <CardHeader className="text-white bg-success">
                        Done!
                        <span className={cn('score')}>{score}%</span>
                    </CardHeader>
                ) : null}
                <AssignmentItemBody />
                <AssignmentItemForm
                    onSubmit={this.handleSubmitSolution}
                    isEndAssingment={isEndAssignment}
                    status={status}
                />
            </Card>
        );
    }
}

export default AssignmentItem;
