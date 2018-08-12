import * as React from 'react';
import { ITaskData } from 'core/models';

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
            <div>
                <div>{task.status}</div>
                <div>
                    <h5>{task.name}</h5>
                    <p>{task.url}</p>
                </div>
                <div>
                    {task.attested ? null : (
                        <small>
                            <form>
                                <div>
                                    <label>Choose repo</label>
                                    <input type="text" ref={this.studentRepo} />
                                </div>
                                <div>
                                    <label>Comments</label>
                                    <input type="text" ref={this.studentComment} />
                                </div>
                                <button
                                    type="submit"
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
