import * as React from 'react';
import { fetchAssignments, updateUserAssignments } from 'core/actions';
import { IAssignment } from 'core/models';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers';

import Tasks from 'components/Assignments';

type Props = {
    assignments: IAssignment[];
    fetchAllAssignments: () => void;
    updateAssignments: () => void;
    fakeFetchAssignment: () => void;
};

const mapStateToProps = (state: RootState, props: Props): Props => {
    return {
        ...props,
        assignments: state.assignment.data,
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Props => {
    return {
        ...props,
        fetchAllAssignments: () => {
            dispatch(fetchAssignments());
        },
        updateAssignments: () => {
            dispatch(updateUserAssignments());
        },
        fakeFetchAssignment: () => {
            dispatch(fetchAssignments());
        },
    };
};

class TasksContainer extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchAllAssignments();
    }

    componentDidUpdate() {
        if (this.props.assignments[0] !== undefined) {
            if (Date.now() > this.props.assignments[0].deadlineDate.getTime()) {
                this.props.updateAssignments();
            }
        }
    }

    render() {
        return (
            <div>
                <Tasks fakeAssign={() => this.props.updateAssignments()} fakeData={this.props.assignments} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TasksContainer);
