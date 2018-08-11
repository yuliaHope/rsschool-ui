import * as React from 'react';

type AssignmentItemProps = {
    isEndAssignment: boolean;
};

type AssignmentItemState = {
    status: string;
    score: number;
};

class AssignmentItem extends React.PureComponent<AssignmentItemProps, AssignmentItemState> {
    state: AssignmentItemState = {
        status: this.props.isEndAssignment ? 'MissedDeadline' : 'Assigned',
        score: 0,
    };

    handleSubmitSolution = (evt: any) => {
        evt.preventDefault();
        setTimeout(() => {
            // loading imitation
            this.setState({
                status: 'Checked',
                score: Math.floor(0 + Math.random() * (100 + 1 - 0)),
            });
        }, 500);
    };

    render() {
        const { status, score } = this.state;
        return (
            <div
                className={`card bg-secondary mb-3
                ${
                    status === 'Checked' && score < 100
                        ? 'border-warning'
                        : status === 'Checked' && score === 100
                            ? `border-success`
                            : status === 'MissedDeadline'
                                ? `border-danger`
                                : ``
                }`}
            >
                {status === 'Assigned' ? (
                    <div className="card-header">Not submitted yet!</div>
                ) : status === 'Checked' && score < 100 ? (
                    <div className="card-header text-white bg-warning">
                        Not submitted yet! <span className="score">{score}%</span>
                    </div>
                ) : status === 'Checked' && score === 100 ? (
                    <div className="card-header text-white bg-success">
                        Done! <span className="score">{score}%</span>
                    </div>
                ) : status === 'MissedDeadline' ? (
                    <div className="card-header text-white bg-danger">The deadline has passed</div>
                ) : null}
                <div className="card-body">
                    <h5 className="card-title">CodeWars Tasks</h5>
                    <p className="card-text">Some quick example text to build on the card title .</p>
                </div>
                {status === 'Assigned' && (
                    <div className="card-footer">
                        <small className="text-muted">
                            <form onSubmit={this.handleSubmitSolution}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Choose repo</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter link"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail9">Comments</label>
                                    <textarea
                                        rows={3}
                                        className="form-control form-control-sm"
                                        id="exampleInputEmail9"
                                        placeholder="Write comments here"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-sm">
                                    Submit
                                </button>
                            </form>
                        </small>
                    </div>
                )}
            </div>
        );
    }
}

export default AssignmentItem;
