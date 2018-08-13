import * as React from 'react';
import FooterForm from './FooterForm';
import { classNames } from 'core/styles';

const cn = classNames(require('./index.scss'));

type Props = {
    formTitle: any;
    formStyle: string;
    title: string;
    link: string;
    taskId: number;
    studentId: string;
    submit: any;
    isSubmit: boolean;
};

class TaskForm extends React.PureComponent<Props> {
    render() {
        const { taskId, studentId, title, link, formStyle, formTitle, isSubmit, submit } = this.props;
        return (
            <div className={cn('card', `border-${formStyle} mb-3`)}>
                <div className={cn('card-header', `bg-${formStyle}`)}>{formTitle}</div>
                <div className={cn('card-body')}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{link}</p>
                </div>
                <div className={cn('card-footer')}>
                    {isSubmit ? null : <FooterForm submit={submit} taskId={taskId} studentId={studentId} />}
                </div>
            </div>
        );
    }
}

export default TaskForm;
