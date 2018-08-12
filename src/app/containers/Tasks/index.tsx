import { fetchAssignments, submitSolution } from 'core/actions';
import { IAssignment } from 'core/models';
import { RootState } from 'core/reducers';
import { classNames } from 'core/styles';
import * as React from 'react';
import { connect } from 'react-redux';
import TaskForm from 'components/taskForm';
import buildTaskForm from 'components/taskForm/utils/buildTaskFrom';
import { CardDeck } from 'reactstrap';

const cn = classNames(require('./index.scss'));

const mapStateToProps = (state: RootState, props: any): AssigmentContainerProps => {
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
        onLoad: (courseId: string, studentId: string) => {
            dispatch(fetchAssignments(courseId, studentId));
        },
        submitTask: (assignment: IAssignment) => {
            dispatch(submitSolution(assignment));
        },
    };
};

type AssigmentContainerProps = {
    onLoad: (courseId: string, studentId: string) => void;
    submitTask: (assignment: IAssignment) => void;
    studentId: string;
    courseId: string;
    isLoading: boolean;
    assignments: any;
};

const Temp = {
    github: 'fdsfsd',
    score: 100,
};

const BuildTaskForm = buildTaskForm(TaskForm);

class Tasks extends React.Component<AssigmentContainerProps> {
    constructor(props: AssigmentContainerProps) {
        super(props);
    }

    async componentDidMount() {
        const { courseId, studentId } = this.props;
        await this.props.onLoad(courseId, studentId);
    }

    generateTasks() {
        const results: any = [];
        const { assignments } = this.props.assignments;
        const { submitTask } = this.props;

        assignments.forEach((item: any, i: number) => {
            const props = {
                title: 'Exchange money',
                urlToDescription: 'htppfsdfsd',
                taskId: item.taskId,
                studentId: item.studentId,
                status: item.status,
                score: item.score,
                submit: submitTask.bind(item),
            };
            results.push(<BuildTaskForm key={i} {...props} />);
        });
        return results;
    }

    render() {
        const { isLoading } = this.props;
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
                        <CardDeck>{this.generateTasks()}</CardDeck>
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
