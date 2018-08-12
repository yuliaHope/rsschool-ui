import * as React from 'react';
import TaskItem from 'components/TaskItem';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers';
import { fetchTasks } from 'core/actions';
import { ITaskData } from 'core/models';
type Props = {
    tasksData?: Array<ITaskData>;
    loading: boolean;
    error: any;
    fetchTasksData: (courseId: string) => void;
};

const mapStateToProps = (state: RootState, props: any): Props => {
    return {
        ...props,
        tasksData: state.tasks.tasks,
        loading: state.tasks.loading,
        error: state.tasks.error,
    };
};

const mapDispatchToProps = (dispatch: any, props: any): Props => {
    return {
        ...props,
        fetchTasksData: (courseId: string) => {
            dispatch(fetchTasks(courseId));
        },
    };
};

class Tasks extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchTasksData('asdasd');
    }
    render() {
        const { tasksData, error } = this.props;
        return (
            <React.Fragment>
                <h2>Tasks</h2>
                <p>
                    Your github private repository <a href="#">Link TO Git</a>
                </p>
                {tasksData ? tasksData.map(elem => <TaskItem task={elem} key={elem._id} />) : <div>Loading</div>}
                {error ? <div>Error</div> : null}
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tasks);
