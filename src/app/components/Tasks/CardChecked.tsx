import * as React from 'react';
import { classNames } from 'core/styles';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const cn = classNames(require('./index.scss'));

type Props = {
    score: number;
    title: string;
    description: string;
};

const CardChecked = (props: Props) => {
    const { score, title, description } = props;
    return (
        <Card className={`${cn('card')} ${score >= 100 ? cn('border-success') : cn('border-warning')}`}>
            <CardHeader className={`${cn('text-white')} ${score >= 100 ? cn('bg-success') : cn('bg-warning')}`}>
                {score >= 100 ? 'Done!' : 'Not submitted yet!'} <span className={cn('score')}>{score}%</span>
            </CardHeader>
            <CardBody className={cn('card-body')}>
                <CardTitle className={cn('card-title')}>{title}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default CardChecked;
