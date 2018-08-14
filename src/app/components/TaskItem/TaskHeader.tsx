import * as React from 'react';
type Props = {
    status: string;
    score: number;
};
export const TaskHeader = ({ status, score }: Props) => {
    let headerTxt;
    let mark;
    // i will remove it whe i write backEnd
    if (status === 'Assigned') {
        headerTxt = 'Not submitted yet!';
        mark = '';
    } else if (status === 'MissedDeadline') {
        headerTxt = 'The deadline has passed!';
        mark = '';
    } else if (status === 'Checked') {
        headerTxt = 'Done!';
        mark = score;
    } else {
        headerTxt = status;
        mark = '';
    }
    return (
        <div className="card-header">
            {headerTxt}
            {mark ? <span>{mark}%</span> : null}
        </div>
    );
};
