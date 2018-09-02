import * as React from 'react';
import { shallow } from 'enzyme';
import TaskForm from './TaskForm';
import { AssignmentStatus } from '../../core/models';

describe('Task Item', () => {
    const props = {
        status: AssignmentStatus.Assigned,
        assignment: {
            _id: '_id',
            assignmentRepo: 'assignmentRepo',
            checkDate: 123,
            completeDate: 123,
            courseId: 'courseId',
            deadlineDate: 123,
            mentorComment: 'mentorComment',
            mentorId: 'mentorId',
            score: 0,
            status: AssignmentStatus.Assigned,
            studentComment: 'studentComment',
            studentId: 'studentId',
            taskId: 'taskId',
            title: 'title',
        },
        fetchAssignmentSolution: jest.fn(),
    };
    describe('render Task Form', () => {
        it('in case status is Assigned', () => {
            const output = shallow(<TaskForm {...props} />);
            expect(output).toMatchSnapshot();
        });
        it('in case status is Checked', () => {
            const nextProps = {
                ...props,
                status: AssignmentStatus.Checked,
                assignment: {
                    ...props.assignment,
                    status: AssignmentStatus.Checked,
                },
            };
            const output = shallow(<TaskForm {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
    });
});
