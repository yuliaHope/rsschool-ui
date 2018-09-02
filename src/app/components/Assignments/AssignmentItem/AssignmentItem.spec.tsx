import * as React from 'react';
import { shallow } from 'enzyme';
import AssignmentItem from './AssignmentItem';
import { AssignmentStatus } from '../../../core/models';

describe('Assignments Item', () => {
    const props = {
        assignment: {
            isEndAssignment: false,
            isActiveAssignment: true,
            assignment: {
                _id: 123,
                assignmentRepo: 'assignmentRepo',
                checkDate: 1555555555555555555555,
                completeDate: 10000555555555555,
                courseId: 'courseId',
                deadlineDate: 15555555555555555555555,
                mentorComment: 'mentorComment',
                mentorId: 'mentorId',
                score: 0,
                status: AssignmentStatus.Assigned,
                studentComment: 'studentComment',
                studentId: 'studentId',
                taskId: 'taskId',
                title: 'title',
                urlToDescription: 'urlToDescription',
                whoChecks: 'whoChecks',
            },
        },
        updateAssignment: jest.fn(),
    };

    describe('render card', () => {
        it('Assigned status', () => {
            const output = shallow(<AssignmentItem {...props} />);
            expect(output).toMatchSnapshot();
        });

        it('Checked status && score !== 100', () => {
            const nextProps = {
                ...props,
                assignment: {
                    ...props.assignment,
                    assignment: {
                        ...props.assignment.assignment,
                        status: AssignmentStatus.Checked,
                        score: 30,
                    },
                },
            };
            const output = shallow(<AssignmentItem {...nextProps} />);
            expect(output).toMatchSnapshot();
        });

        it('Checked status && score === 100', () => {
            const nextProps = {
                ...props,
                assignment: {
                    ...props.assignment,
                    assignment: {
                        ...props.assignment.assignment,
                        status: AssignmentStatus.Checked,
                        score: 100,
                    },
                },
            };
            const output = shallow(<AssignmentItem {...nextProps} />);
            expect(output).toMatchSnapshot();
        });

        it('Missed deadline', () => {
            const nextProps = {
                ...props,
                assignment: {
                    ...props.assignment,
                    isEndAssignment: true,
                },
            };
            const output = shallow(<AssignmentItem {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
    });
});
