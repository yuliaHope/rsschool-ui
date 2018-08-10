import * as React from 'react';
import { connect } from 'react-redux';

import Assignments from 'components/Assignments';
import { fetchAssignments, submitSolution } from 'core/actions';
// import { NormalizeAssignmentsData } from 'core/helpers';
import { IAssignment } from 'core/models';
import './index.scss';

const mapStateToProps = (state: any, props: any): AssignmentsContainerProps => {
    return {
        ...props,
        // isLoading: state.assignments.isLoading,
        courseId: props.match.params.id,
        isAdmin: state.user.isAdmin,
        // normalizeData: state.assignments.normalizeData,
    };
};

const mapDispatchToProps = (dispatch: any, props: any): AssignmentsContainerProps => {
    return {
        ...props,
        onLoad: id => {
            dispatch(fetchAssignments(id));
        },
        submitSolution: (assignment: IAssignment) => {
            dispatch(submitSolution(assignment));
        },
    };
};

type AssignmentsContainerProps = {
    // normalizeData: NormalizeAssignmentsData[];
    onLoad: (id: string) => void;
    courseId: string;
    isLoading: boolean;
    isAdmin: boolean;
};

class AssignmentsContainer extends React.Component<AssignmentsContainerProps, any> {
    componentDidMount() {
        this.props.onLoad(this.props.courseId);
    }

    render() {
        // const { isAdmin, isLoading, courseId } = this.props;
        return (
            <div className="schedule">
                <h2>TASKS</h2>
                <div className="row">
                    <div className="col-6">
                        <p>
                            Your github private repository
                            <a className="badge badge-dark" href="#">
                                here
                            </a>
                        </p>
                    </div>
                    <div className="col-6 text-right">
                        <p>You are in the TOP 50 students!</p>
                        <p>Full Score: 200</p>
                    </div>
                </div>

                <Assignments
                // userId={userId}
                // courseId={courseId}
                // normalizeData={normalizeData}
                // isAdmin={isAdmin}
                // sumbitAssignment={this.props.sumbitAssignment}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AssignmentsContainer);
