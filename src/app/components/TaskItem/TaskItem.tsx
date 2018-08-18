import * as React from 'react';
import { IAssignmentModel } from 'core/models';
import { classNames } from '../../core/styles';
import TaskForm from './TaskForm';
import { TaskHeader } from './TaskHeader';

const cn = classNames(require('./index.scss'));

type Props = {
    assignment: IAssignmentModel;
    courseId: string;
    fetchAssignmentSolution: (assignment: IAssignmentModel) => void;
};
export const TaskItem = ({ assignment, fetchAssignmentSolution }: Props) => {
    return (
        <div className={cn('three-in-row', 'card', 'bg-secondary', 'mb-3')}>
            <TaskHeader status={assignment.status} score={assignment.score} />
            <div className="card-body">
                <h5 className="card-title">{assignment.title}</h5>
                <p className="card-text">{assignment.assignmentRepo}</p>
            </div>
            <div className="card-footer">
                <TaskForm
                    status={assignment.status}
                    assignment={assignment}
                    fetchAssignmentSolution={fetchAssignmentSolution}
                />
            </div>
        </div>
    );
};
