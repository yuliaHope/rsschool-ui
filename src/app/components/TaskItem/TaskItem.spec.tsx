import * as React from 'react';
import { shallow } from 'enzyme';
import { TaskItem } from './TaskItem';
import { AssignmentStatus } from '../../core/models';

describe('Task Item', () => {
    const props = {
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
    describe('render item', () => {
        it('Assigned status', () => {
            const output = shallow(<TaskItem {...props} />);
            expect(output).toMatchSnapshot();
        });
        it('in case status is Checked', () => {
            const nextProps = {
                ...props,
                assignment: {
                    ...props.assignment,
                    status: AssignmentStatus.Checked,
                },
            };
            const output = shallow(<TaskItem {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
    });
});
