import * as React from 'react';

type Props = {
    submit: any;
    taskId: number;
    studentId: string;
};

export default class CardFooter extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    handleRepInput = (event: any) => {
        this.setState({ assignmentRepo: event.target.value });
    };

    handleCommentInput = (event: any) => {
        this.setState({ studentComment: event.target.value });
    };

    render() {
        const { submit, taskId, studentId } = this.props;
        const { assignmentRepo, studentComment } = this.state;
        return (
            <small className="text-muted">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        submit({
                            taskId,
                            studentId,
                            assignmentRepo,
                            studentComment,
                        });
                    }}
                >
                    <div className="form-group">
                        <label>Choose repo</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter link"
                            onChange={this.handleRepInput}
                        />
                    </div>
                    <div className="form-group">
                        <label>Comments</label>
                        <textarea
                            className="form-control form-control-sm"
                            id="exampleInputEmail9"
                            placeholder="Write comments here"
                            onChange={this.handleCommentInput}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">
                        Submit
                    </button>
                </form>
            </small>
        );
    }
}
