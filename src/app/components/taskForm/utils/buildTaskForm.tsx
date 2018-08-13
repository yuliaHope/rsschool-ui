import * as React from 'react';
import { classNames } from 'core/styles';
import { AssignmentTitle, AssignmentStyle } from 'core/models';

const cn = classNames(require('../index.scss'));

type Props = {
    title: string;
    urlToDescription: string;
    status: string;
    taskId: number;
    studentId: string;
    score: number;
    submit: any;
};

declare type StyleKey = keyof typeof AssignmentStyle;
declare type TitleKey = keyof typeof AssignmentTitle;

const buildTaskForm = (HostComponent: any) => {
    return class BuildTaskForm extends React.PureComponent<Props> {
        render() {
            const { taskId, studentId, urlToDescription, status, score, title, submit } = this.props;

            let formTitle;
            let formStyle;
            const isSubmit = status !== 'Assigned';

            if (status === 'Checked') {
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
                <HostComponent
                    formTitle={formTitle}
                    formStyle={formStyle}
                    title={title}
                    link={urlToDescription}
                    taskId={taskId}
                    studentId={studentId}
                    isSubmit={isSubmit}
                    submit={submit}
                />
            );
        }
    };
};

export default buildTaskForm;
