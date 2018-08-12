import * as React from 'react';
import CardFooter from './cardFooter';
import { classNames } from 'core/styles';

const cn = classNames(require('./index.scss'));

type Props = {
    formTitle: any;
    headerStyle: string;
    borderStyle: string;
    title: string;
    link: string;
    taskId: number;
    studentId: string;
    submit: any;
    isSubmit: boolean;
};

class TaskForm extends React.PureComponent<Props> {
    render() {
        const { taskId, studentId, title, link, borderStyle, headerStyle, formTitle, isSubmit, submit } = this.props;
        return (
            <div className={cn('card', `border-${borderStyle} mb-3`)}>
                <div className={cn('card-header', `bg-${headerStyle}`)}>{formTitle}</div>
                <div className={cn('card-body')}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{link}</p>
                </div>
                <div className={cn('card-footer')}>
                    {isSubmit ? null : <CardFooter submit={submit} taskId={taskId} studentId={studentId} />}
                </div>
            </div>
        );
    }
}

export default TaskForm;
