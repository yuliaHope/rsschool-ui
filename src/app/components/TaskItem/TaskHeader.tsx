import * as React from 'react';
import { classNames } from '../../core/styles';
const cn = classNames(require('./index.scss'));

type Props = {
    status: string;
    score: number;
};
export const TaskHeader = ({ status, score }: Props) => {
    let headerTxt;
    let mark;
    let headerClassNames;
    if (status === 'Assigned') {
        headerTxt = 'Not submitted yet!';
        mark = '';
        headerClassNames = 'bg-warning';
    } else if (status === 'MissedDeadline') {
        headerTxt = 'The deadline has passed!';
        mark = '';
        headerClassNames = 'bg-danger';
    } else if (status === 'Checked') {
        headerTxt = 'Done!';
        mark = score;
        headerClassNames = mark >= 100 ? 'bg-success' : 'bg-warning';
    } else {
        headerTxt = status;
        mark = '';
        headerClassNames = '';
    }

    const colorizeText = headerClassNames ? 'text-white' : '';

    return (
        <div className={`card-header ${headerClassNames} ${colorizeText} ${cn('header-alignment')}`}>
            <span className="card-header-text"> {headerTxt} </span>
            {mark ? <span className="card-header-text">{mark}%</span> : null}
        </div>
    );
};
