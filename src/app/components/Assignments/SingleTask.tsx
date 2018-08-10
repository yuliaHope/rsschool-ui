import * as React from 'react';

class SingleTask extends React.PureComponent {
    render() {
        return (
            <div className="card bg-secondary mb-3">
                <div className="card-header">Not submitted yet!</div>
                <div className="card-body">
                    <h5 className="card-title">CodeWars Tasks</h5>
                    <p className="card-text">Some quick example text to build on the card title .</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        <form>
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
            </div>
        );
    }
}

export default SingleTask;
