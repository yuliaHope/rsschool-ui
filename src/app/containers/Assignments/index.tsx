import * as React from 'react';
import { fetchAllAssignments, updateAllAssignments } from 'core/actions';
import { IAssignment } from 'core/models';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers';

import Tasks from 'components/Tasks';

type Props = {
    assignments: IAssignment[];
    fetchAllAssignments: () => void;
    updateAllAssignments: () => void;
};

const mapStateToProps = (state: RootState, props: Props): Props => {
    if (state.assignments == null) {
        return props;
    }
    return {
        ...props,
        assignments: state.assignments.data || [],
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Props => {
    return {
        ...props,
        fetchAllAssignments: () => {
            dispatch(fetchAllAssignments());
        },
        updateAllAssignments: () => {
            dispatch(updateAllAssignments());
        },
    };
};

class Assignments extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchAllAssignments();
    }

    componentDidUpdate() {
        if (this.props.assignments[0]) {
            if (Date.now() > this.props.assignments[0].deadlineDate.getTime()) {
                this.props.updateAllAssignments();
            }
        }
    }

    render() {
        return (
            <div>
                <Tasks assign={this.props.updateAllAssignments} data={this.props.assignments} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Assignments);
