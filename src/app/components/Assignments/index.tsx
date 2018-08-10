import * as React from 'react';
import SingleTask from './SingleTask';

class Assignments extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className="card-deck mb-3">
                    <SingleTask />
                    <SingleTask />
                    <SingleTask />
                </div>
                <div className="card-deck mb-3">
                    <SingleTask />
                    <SingleTask />
                    <SingleTask />
                </div>
            </React.Fragment>
        );
    }
}

export default Assignments;
