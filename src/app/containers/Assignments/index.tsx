import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Badge } from 'reactstrap';
import Assignments from 'components/Assignments';
import { fetchAssignments, submitSolution } from 'core/actions';
import { NormalizeAssignmentsData } from 'core/helpers';
import { IAssignmentDocument } from 'core/models';
import { classNames } from 'core/styles';
import './index.scss';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state: any, props: any): AssignmentsContainerProps => {
    return {
        ...props,
        courseId: props.match.params.id,
        isAdmin: state.user.isAdmin,
        normalizeData: state.assignments.normalizeData,
        username: state.user.username,
    };
};

const mapDispatchToProps = (dispatch: any, props: any): AssignmentsContainerProps => {
    return {
        ...props,
        onLoadId: id => {
            dispatch(fetchAssignments(id));
        },
        submitSolution: assignment => {
            dispatch(submitSolution(assignment));
        },
    };
};

type AssignmentsContainerProps = {
    normalizeData: NormalizeAssignmentsData[];
    onLoadId: (id: any) => void;
    username: any;
    courseId: string;
    isAdmin: boolean;
    userProfile: string;
    submitSolution: (assignment: IAssignmentDocument) => void;
};

class AssignmentsContainer extends React.Component<AssignmentsContainerProps, any> {
    componentDidMount() {
        this.props.onLoadId({ courseId: this.props.courseId, userId: this.props.username });
    }

    render() {
        const { isAdmin, courseId, normalizeData } = this.props;
        return (
            <React.Fragment>
                {!isAdmin && (
                    <div className="tasks">
                        <h2>TASKS</h2>
                        <Row>
                            <Col xs="6">
                                <p>
                                    Your github private repository
                                    <Badge color="dark" href="#" className={cn('badge')}>
                                        {' '}
                                        here
                                    </Badge>
                                </p>
                            </Col>
                            <Col xs="6" className="text-right">
                                <p>You are in the TOP 50 students!</p>
                                <p>Full Score: 200</p>
                            </Col>
                        </Row>
                        <Assignments
                            courseId={courseId}
                            normalizeData={normalizeData}
                            submitSolution={this.props.submitSolution}
                        />
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AssignmentsContainer);
