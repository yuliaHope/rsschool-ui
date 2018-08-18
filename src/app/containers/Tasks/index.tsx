import * as React from 'react';
import { TaskItem } from 'components/TaskItem/TaskItem';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers';
import { fetchAssignments, fetchSolution } from 'core/actions';
import { IAssignmentModel } from 'core/models';
type Props = {
    courseId: string;
    assignments?: Array<IAssignmentModel>;
    loading: boolean;
    error: any;
    solutionError: any;
    fetchAssignmentsData: (courseId: string) => void;
    fetchAssignmentSolution: (assignment: IAssignmentModel) => void;
};

const mapStateToProps = (state: RootState, props: any): Props => {
    return {
        ...props,
        courseId: props.match.params.id,
        assignments: state.assignments.assignments,
        loading: state.assignments.loading,
        error: state.assignments.error,
        solutionError: state.assignments.solutionError,
    };
};

const mapDispatchToProps = (dispatch: any, props: any): Props => {
    return {
        ...props,
        fetchAssignmentsData: (courseId: string) => {
            dispatch(fetchAssignments(courseId));
        },
        fetchAssignmentSolution: (assignment: IAssignmentModel) => {
            dispatch(fetchSolution(assignment));
        },
    };
};

class Tasks extends React.Component<Props> {
    componentDidMount() {
        this.props.fetchAssignmentsData(this.props.courseId);
    }
    getFullScore(): number {
        const { assignments } = this.props;
        let score = 0;
        if (assignments && assignments.length !== 0) {
            assignments.map(elem => {
                score += elem.score;
            });
        }
        return score;
    }
    render() {
        const { assignments, error, fetchAssignmentSolution, courseId } = this.props;
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
                        <p>Full Score:{this.getFullScore()}</p>
                    </div>
                </div>
                <div className="card-deck mb-3">
                    {assignments ? (
                        assignments.map(elem => (
                            <TaskItem
                                assignment={elem}
                                key={elem.taskId}
                                fetchAssignmentSolution={fetchAssignmentSolution}
                                courseId={courseId}
                            />
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
