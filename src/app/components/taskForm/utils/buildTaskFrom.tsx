import * as React from 'react';
import { classNames } from 'core/styles';

const cn = classNames(require('../index.scss'));

type Props = {
    title: string;
    assigmentRepo: string;
    status: string;
    score: number;
};

interface IConfig {
    Assigned: any;
    ReadyForView: any;
    Rejected: any;
    Checked: any;
    [key: string]: any;
}

const config: IConfig = {
    Assigned: {
        title: 'Not submitted yet!',
        style: 'secondary',
    },
    ReadyForView: {
        title: 'Ready for view!',
        style: 'warning',
    },
    Rejected: {
        title: 'The deadline has passed!',
        style: 'danger',
    },
    Checked: {
        title: 'Done',
        style: {
            full: 'success',
            half: 'warning',
        },
    },
};

const buildTaskForm = (HostComponent: any) => {
    return class BuildTaskForm extends React.PureComponent<Props> {
        render() {
            const { assigmentRepo, status, score, title } = this.props;
            let formTitle;
            let borderStyle;
            let headerStyle;
            let isSubmit;
            if (status === 'Checked') {
                const { style } = config.Checked;
                formTitle = (
                    <span>
                        {config[status].title}
                        <span className={cn('score')}>{score}%</span>
                    </span>
                );
                score >= 100 ? (borderStyle = style.full) : (borderStyle = style.half);
            } else {
                formTitle = config[status].title;
                borderStyle = config[status].style;
            }

            if (status !== 'Assigned') {
                isSubmit = true;
                headerStyle = borderStyle + ' text-white';
            } else {
                isSubmit = false;
            }

            return (
                <HostComponent
                    formTitle={formTitle}
                    headerStyle={headerStyle}
                    borderStyle={borderStyle}
                    title={title}
                    link={assigmentRepo}
                    isSubmit={isSubmit}
                />
            );
        }
    };
};

export default buildTaskForm;
