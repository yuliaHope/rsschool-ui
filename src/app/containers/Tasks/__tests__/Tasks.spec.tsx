import { shallow } from 'enzyme';
import * as React from 'react';
import Tasks from '../index';
import TaskForm from 'components/TaskForm';
const { __stateGetter } = require('react-redux');

type TasksType = any;
const mockAssignments = {
    assignments: [
        {
            title: 'Test task',
            urlToDescription: 'Test description',
            taskId: 0,
            studentId: 'nikkaktus24',
            status: 'Assigned',
            score: 0,
            courseId: 'rs-course-2018q3',
        },
    ],
};

const resultValue = <TaskForm key="0" submit={jest.fn()} {...mockAssignments.assignments[0]} />;

describe('Tasks', () => {
    beforeEach(() => {
        __stateGetter.mockImplementation(() => ({}));
    });

    it('test generateTasks function ', () => {
        const output = shallow(
            <Tasks
                submitTask={jest.fn()}
                studentId={'nikkaktus24'}
                courseId={'rs-course-2018q3'}
                isLoading={false}
                error={undefined}
                assignments={mockAssignments}
            />,
        );
        const instance = output.dive().instance() as TasksType;
        const result = instance.generateTasks();
        expect(JSON.stringify(result[0])).toEqual(JSON.stringify(resultValue));
    });

    it('renders correctly if no data', () => {
        const output = shallow(<Tasks studentId={''} courseId={''} isLoading={false} error={undefined} />);
        expect(output).toMatchSnapshot();
    });
});
