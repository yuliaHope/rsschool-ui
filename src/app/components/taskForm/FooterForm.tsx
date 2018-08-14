import * as React from 'react';

type Props = {
    submit: any;
    taskId: number;
    studentId: string;
};

export default class FooterForm extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            assignmentRepo: null,
            studentComment: null,
        };
    }

    handleSubmit = (event: any) => {
        const { submit, taskId, studentId } = this.props;
        const { assignmentRepo, studentComment } = this.state;
        event.preventDefault();
        submit({
            taskId,
            studentId,
            assignmentRepo,
            studentComment,
        });
    };

    handleChange = (event: any) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <small className="text-muted">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Choose repo</label>
                        <input // TODO: change to ReduxInput
                            type="text"
                            className="form-control form-control-sm"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter link"
                            name="assignmentRepo"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Comments</label>
                        <textarea
                            className="form-control form-control-sm"
                            id="exampleInputEmail9"
                            placeholder="Write comments here"
                            name="studentComment"
                            onChange={this.handleChange}
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
