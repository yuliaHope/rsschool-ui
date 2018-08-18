import * as React from 'react';
import { IAssignmentModel } from 'core/models';

type Props = {
    status: string;
    assignment: IAssignmentModel;
    fetchAssignmentSolution: (assignment: IAssignmentModel) => void;
};

class TaskForm extends React.Component<Props> {
    private studentRepo: React.RefObject<HTMLInputElement>;
    private studentComment: React.RefObject<HTMLInputElement>;
    constructor(props: Props) {
        super(props);
        this.studentRepo = React.createRef();
        this.studentComment = React.createRef();
    }
    SendStudentTask(assignment: IAssignmentModel) {
        const { fetchAssignmentSolution } = this.props;
        const studentRepoValue: string = this.studentRepo.current!.value.replace(/\s/g, '');
        if (studentRepoValue) {
            fetchAssignmentSolution(assignment);
        } else {
            alert('wrong repo');
            this.studentRepo.current!.value = '';
        }
    }
    render() {
        const { status } = this.props;
        // i will rewrite this case when i write  backEnd
        if (status !== 'MissedDeadline' && status !== 'Checked' && status !== 'ReadyForReview') {
            const { assignment } = this.props;
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
                                this.SendStudentTask(assignment);
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
