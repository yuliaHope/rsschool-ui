// import {  } from 'core/actions';
// import {  } from 'core/models';
// import { RootState } from 'core/reducers';
// import { classNames } from 'core/styles';
import * as React from 'react';
// import { connect } from 'react-redux';
// import { } from 'reactstrap';

/* const cn = classNames(require('./index.scss'));

const mapStateToProps = (state: RootState, props: any): Props => {
    return {
        ...props,
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Props => {
    return {
        ...props,
         fetchCourses: () => {
            dispatch(fetchAllCourses());
        },
    };
};

type Props = {
    fetchCourses: () => void;
}; */

const Temp = {
    isLoading: false,
    github: 'fdsfsd',
    score: 100,
};

export default class Tasks extends React.Component {
    render() {
        return (
            <div className="tasks">
                <h2>Tasks</h2>
                {Temp.isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                    <div className="row">
                        <div className="col-6">
                            <p>
                                Your github private repository{' '}
                                <a className="badge badge-dark" href={Temp.github}>
                                    here
                                </a>
                            </p>
                        </div>
                        <div className="col-6 text-right">
                            <p>You are in the TOP 50 students!</p>
                            <p>Full Score: {Temp.score}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

/* export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tasks); */
