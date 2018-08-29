import * as React from 'react';
import FooterForm from './FooterForm';
import HeaderForm from './HeaderForm';
import { classNames } from 'core/styles';
import { AssignmentStatus, AssignmentTitle, AssignmentStyle } from 'core/models';

const cn = classNames(require('./index.scss'));

type Props = {
    title: string;
    urlToDescription: string;
    status: string;
    taskId: number;
    score: number;
    courseId: string;
    submit: any;
};

declare type StyleKey = keyof typeof AssignmentStyle;
declare type TitleKey = keyof typeof AssignmentTitle;

const TaskForm = (props: Props) => {
    const { taskId, title, urlToDescription, submit, status, score, courseId } = props;
    const { Assigned, Checked } = AssignmentStatus;

    let formTitle;
    let formStyle;
    const isSubmit = status !== Assigned;

    if (status === Checked) {
        formTitle = (
            <span>
                {AssignmentTitle[status]}
                <span className={cn('score')}>{score}%</span>
            </span>
        );
        score >= 100 ? (formStyle = AssignmentStyle.Full) : (formStyle = AssignmentStyle.Half);
    } else {
        formTitle = AssignmentTitle[status as TitleKey];
        formStyle = AssignmentStyle[status as StyleKey];
    }

    return (
        <div className={cn('card', `border-${formStyle} mb-3`)}>
            <div className={cn('card-header', `bg-${formStyle}`)}>{formTitle}</div>
            <HeaderForm title={title} urlToDescription={urlToDescription} />
            <div className={cn('card-footer')}>
                {isSubmit ? null : <FooterForm submitApi={submit} taskId={taskId} courseId={courseId} />}
            </div>
        </div>
    );
};

export default TaskForm;
