import * as React from 'react';
import { ITaskData } from 'core/models';
import { classNames } from '../../core/styles';

const cn = classNames(require('./index.scss'));

type Props = {
    task: ITaskData;
    fetchTaskSolution: (taskId: string) => void;
};

class TaskItem extends React.Component<Props> {
    private studentRepo: React.RefObject<HTMLInputElement>;
    private studentComment: React.RefObject<HTMLInputElement>;
    constructor(props: Props) {
        super(props);
        this.studentRepo = React.createRef();
        this.studentComment = React.createRef();
    }
    SendStudentTask(id: string) {
        const { fetchTaskSolution } = this.props;
        const studentRepoValue: string = this.studentRepo.current!.value.replace(/\s/g, '');
        if (studentRepoValue) {
            fetchTaskSolution(id);
        } else {
            alert('wrong repo');
            this.studentRepo.current!.value = '';
        }
    }
    render() {
        const { task } = this.props;
        return (
            <div className={cn('three-in-row', 'card', 'bg-secondary', 'mb-3')}>
                <div className="card-header">{task.status}</div>
                <div className="card-body">
                    <h5 className="card-title">{task.name}</h5>
                    <p className="card-text">{task.url}</p>
                </div>
                <div className="card-footer">
                    {task.attested ? null : (
                        <small className="text-muted">
                            <form>
                                <div className="form-group">
                                    <label>Choose repo</label>
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        ref={this.studentRepo}
                                        placeholder="Enter link"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Comments</label>
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        ref={this.studentComment}
                                        placeholder="Write comments here"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                    onClick={ev => {
                                        ev.preventDefault();
                                        this.SendStudentTask(task._id);
                                    }}
                                >
                                    Submit
                                </button>
                            </form>
                        </small>
                    )}
                </div>
            </div>
        );
    }
}

export default TaskItem;
