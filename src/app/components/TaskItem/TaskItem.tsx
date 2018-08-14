import * as React from 'react';
import { IAssignments } from 'core/models';
import { classNames } from '../../core/styles';
import TaskForm from './TaskForm';
import { TaskHeader } from './TaskHeader';

const cn = classNames(require('./index.scss'));

type Props = {
    task: IAssignments;
    fetchTaskSolution: (taskId: string) => void;
};
export const TaskItem = ({ task, fetchTaskSolution }: Props) => {
    return (
        <div className={cn('three-in-row', 'card', 'bg-secondary', 'mb-3')}>
            <TaskHeader status={task.status} score={task.score} />
            <div className="card-body">
                <h5 className="card-title">{/*when i write dackEnd i will rewrite this prop*/}SOME NAME</h5>
                <p className="card-text">{task.assigmentRepo}</p>
            </div>
            <div className="card-footer">
                <TaskForm status={task.status} id={task.taskId} fetchTaskSolution={fetchTaskSolution} />
            </div>
        </div>
    );
};
