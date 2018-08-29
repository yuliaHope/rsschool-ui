import { fetchAssignments, submitSolution } from 'core/actions';
import { IAssignment } from 'core/models';
import { RootState } from 'core/reducers';
import { classNames } from 'core/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import TaskForm from 'components/TaskForm';
import { CardDeck } from 'reactstrap';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state: RootState, props: any): AssigmentContainerProps => {
    if (state.assignments == null) {
        return props;
    }
    return {
        ...props,
        isLoading: state.assignments.isLoading,
        courseId: props.match.params.id,
        studentId: state.user.username,
        assignments: state.assignments,
    };
};

const mapDispatchToProps = (dispatch: any, props: any): AssigmentContainerProps => {
    return {
        ...props,
        onLoad: (courseId: string) => {
            dispatch(fetchAssignments(courseId));
        },
        submitTask: (assignment: IAssignment) => {
            dispatch(submitSolution(assignment));
        },
    };
};

type AssigmentContainerProps = {
    onLoad: (courseId: string) => void;
    submitTask: (assignment: IAssignment) => void;
    studentId: string;
    courseId: string;
    isLoading: boolean;
    error: boolean | undefined;
    assignments: any;
};

const Temp = {
    github: 'fdsfsd',
    score: 100,
};

class Tasks extends React.Component<AssigmentContainerProps> {
    constructor(props: AssigmentContainerProps) {
        super(props);
    }

    async componentDidMount() {
        const { courseId } = this.props;
        await this.props.onLoad(courseId);
    }

    generateTasks() {
        const { assignments } = this.props.assignments;
        const { submitTask } = this.props;
        if (assignments && assignments.length > 0) {
            return assignments.map((item: any, i: number) => {
                const props = {
                    title: item.title,
                    urlToDescription: item.urlToDescription,
                    taskId: item.taskId,
                    studentId: item.studentId,
                    status: item.status,
                    score: item.score,
                    courseId: item.courseId,
                    submit: submitTask,
                };
                return <TaskForm key={i} {...props} />;
            });
        } else {
            return 'There is no one task';
        }
    }

    render() {
        const { isLoading, error } = this.props;
        return (
            <div className={cn('tasks')}>
                <h2>Tasks</h2>
                {isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                    <section>
                        <div className="row">
                            <div className="col-6">
                                <p>
                                    Your github private repository{' '}
                                    <a className="badge badge-dark" href={Temp.github}>
                                        here
                                    </a>
                                </p>
                            </div>
                            <div className="col-6 text-right">
                                <p>You are in the TOP 50 students!</p>
                                <p>Full Score: {Temp.score}</p>
                            </div>
                        </div>
                        <CardDeck>
                            {(() => {
                                if (!isLoading && !error) {
                                    return this.generateTasks();
                                }
                            })()}
                        </CardDeck>
                    </section>
                )}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tasks);
