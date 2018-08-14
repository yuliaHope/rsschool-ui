import * as React from 'react';

type Props = {
    status: string;
    id: string;
    fetchTaskSolution: (taskId: string) => void;
};

class TaskForm extends React.Component<Props> {
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
        const { status } = this.props;
        // i will rewrite this case when i write  backEnd
        if (status !== 'MissedDeadline' && status !== 'Checked' && status !== 'ReadyForReview') {
            const { id } = this.props;
            return (
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
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                this.SendStudentTask(id);
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </small>
            );
        } else {
            return <React.Fragment />;
        }
    }
}

export default TaskForm;
