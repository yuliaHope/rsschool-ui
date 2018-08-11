// import { } from 'core/models';
import * as React from 'react';

/* type Props = {

}; */

class CardFooter extends React.PureComponent {
    render() {
        return (
            <small className="text-muted">
                <form>
                    <div className="form-group">
                        <label>Choose repo</label>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter link"
                        />
                    </div>
                    <div className="form-group">
                        <label>Comments</label>
                        <textarea
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
        );
    }
}

export default CardFooter;
