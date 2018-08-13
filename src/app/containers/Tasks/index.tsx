import * as React from 'react';
import TaskItem from 'components/TaskItem';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers';
import { fetchTasks, fetchSolution } from 'core/actions';
import { ITaskData } from 'core/models';
type Props = {
    tasksData?: Array<ITaskData>;
    loading: boolean;
    error: any;
    solutionError: any;
    fetchTasksData: (courseId: string) => void;
    fetchTaskSolution: (taskId: string) => void;
};

const mapStateToProps = (state: RootState, props: any): Props => {
    return {
        ...props,
        tasksData: state.tasks.tasks,
        loading: state.tasks.loading,
        error: state.tasks.error,
        solutionError: state.tasks.solutionError,
    };
};

const mapDispatchToProps = (dispatch: any, props: any): Props => {
    return {
        ...props,
        fetchTasksData: (courseId: string) => {
            dispatch(fetchTasks(courseId));
        },
        fetchTaskSolution: (taskId: string) => {
            dispatch(fetchSolution(taskId));
        },
    };
};

class Tasks extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchTasksData('asdasd');
    }
    render() {
        const { tasksData, error, fetchTaskSolution } = this.props;
        return (
            <React.Fragment>
                <h2>Tasks</h2>
                <div className="row">
                    <div className="col-6">
                        <p>
                            Your github private repository{' '}
                            <a className="badge badge-dark" href="#">
                                Link TO Git
                            </a>
                        </p>
                    </div>
                    <div className="col-6 text-right">
                        <p>You are in the TOP 50 students!</p>
                        <p>Full Score: 200</p>
                    </div>
                </div>
                <div className="card-deck mb-3">
                    {tasksData ? (
                        tasksData.map(elem => (
                            <TaskItem task={elem} key={elem._id} fetchTaskSolution={fetchTaskSolution} />
                        ))
                    ) : (
                        <div>Loading</div>
                    )}
                    {error ? <div>Error</div> : null}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tasks);
