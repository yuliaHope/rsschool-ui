import * as React from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { classNames } from 'core/styles';
import './index.scss';

const cn = classNames(require('./index.scss'));

type AssignmentItemProps = {
    isEndAssignment: boolean;
};

type AssignmentItemState = {
    status: string;
    score: number;
};

class AssignmentItem extends React.PureComponent<AssignmentItemProps, AssignmentItemState> {
    state: AssignmentItemState = {
        status: this.props.isEndAssignment ? 'MissedDeadline' : 'Assigned',
        score: 0,
    };

    handleSubmitSolution = (evt: any) => {
        evt.preventDefault();
        setTimeout(() => {
            // loading imitation
            this.setState({
                status: 'Checked',
                score: Math.floor(0 + Math.random() * (100 + 1 - 0)),
            });
        }, 500);
    };

    render() {
        const { status, score } = this.state;
        return (
            <Card
                className={`bm-3 ${
                    status === 'Checked' && score < 100
                        ? 'border-warning'
                        : status === 'Checked' && score === 100
                            ? `border-success`
                            : status === 'MissedDeadline'
                                ? `border-danger`
                                : `bg-secondary`
                }`}
            >
                {status === 'Assigned' ? (
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
                ) : status === 'MissedDeadline' ? (
                    <CardHeader className="text-white bg-danger">The deadline has passed </CardHeader>
                ) : null}
                <CardBody>
                    <h5 className="card-title">CodeWars Tasks</h5>
                    <p className="card-text">Some quick example text to build on the card title .</p>
                </CardBody>
                {status === 'Assigned' && (
                    <CardFooter className={cn('card-footer')}>
                        <small className="text-muted">
                            <Form onSubmit={this.handleSubmitSolution}>
                                <FormGroup>
                                    <Label for="exampleInputEmail1">Choose repo</Label>
                                    <Input
                                        type="text"
                                        bsSize="sm"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter link"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleInputEmail9">Comments</Label>
                                    <Input
                                        type="textarea"
                                        rows={3}
                                        bsSize="sm"
                                        id="exampleInputEmail9"
                                        placeholder="Write comments here"
                                    />
                                </FormGroup>
                                <Button type="submit" color="primary" size="sm">
                                    Submit
                                </Button>
                            </Form>
                        </small>
                    </CardFooter>
                )}
            </Card>
        );
    }
}

export default AssignmentItem;
