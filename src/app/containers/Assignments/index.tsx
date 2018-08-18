import * as React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Badge } from 'reactstrap';
import Assignments from 'components/Assignments';
import { fetchAssignments, updateAssignment } from 'core/actions';
import { IAssignmentDocument } from 'core/models';
import { classNames } from 'core/styles';
import './index.scss';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state: any, props: any): AssignmentsContainerProps => {
    return {
        ...props,
        courseId: props.match.params.id,
        isAdmin: state.user.isAdmin,
        assignments: state.assignments.assignments,
        isLoading: state.assignments.isLoading,
    };
};

const mapDispatchToProps = (dispatch: any, props: any): AssignmentsContainerProps => {
    return {
        ...props,
        onLoad: id => {
            dispatch(fetchAssignments(id));
        },
        updateAssignment: (assignment: IAssignmentDocument) => {
            dispatch(updateAssignment(assignment));
        },
    };
};

type AssignmentsContainerProps = {
    onLoad: (id: any) => void;
    courseId: string;
    isAdmin: boolean;
    userProfile: string;
    assignments: any;
    isLoading: boolean;
    updateAssignment: (assignment: IAssignmentDocument) => void;
};

class AssignmentsContainer extends React.Component<AssignmentsContainerProps, any> {
    componentDidMount() {
        this.props.onLoad(this.props.courseId);
    }

    render() {
        const { courseId, assignments, isLoading } = this.props;
        return (
            <React.Fragment>
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
                    {isLoading ? (
                        <h3>Loading...</h3>
                    ) : (
                        <Assignments
                            courseId={courseId}
                            assignments={assignments}
                            updateAssignment={this.props.updateAssignment}
                        />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AssignmentsContainer);
