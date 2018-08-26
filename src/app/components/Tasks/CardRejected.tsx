import * as React from 'react';
import { classNames } from 'core/styles';
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

const cn = classNames(require('./index.scss'));

type Props = {
    title: string;
    description: string;
};

const CardRejected = (props: Props) => {
    const { title, description } = props;
    return (
        <Card className={`${cn('card')} ${cn('border-danger')}`}>
            <CardHeader className={cn('text-white bg-danger')}>The deadline has passed</CardHeader>
            <CardBody className={cn('card-body')}>
                <CardTitle className={cn('card-title')}>{title}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default CardRejected;
