import * as React from 'react';
import { classNames } from 'core/styles';

const cn = classNames(require('./index.scss'));

type Props = {
    title: string;
    urlToDescription: string;
};

const FooterForm = ({ title, urlToDescription }: Props) => {
    return (
        <div className={cn('card-body')}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{urlToDescription}</p>
        </div>
    );
};

export default FooterForm;
