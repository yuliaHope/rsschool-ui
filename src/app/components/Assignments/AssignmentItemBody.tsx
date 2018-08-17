import * as React from 'react';
import { CardBody } from 'reactstrap';

type AssignmentItemBodyProps = {
    title: string;
    urlToDescription?: string;
};

const AssignmentItemBody = (props: AssignmentItemBodyProps) => {
    const { title, urlToDescription } = props;
    return (
        <CardBody>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{urlToDescription}</p>
        </CardBody>
    );
};

export default AssignmentItemBody;
