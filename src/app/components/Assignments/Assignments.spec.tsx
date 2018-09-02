import * as React from 'react';
import { shallow } from 'enzyme';
import Assignments from './index';
import { AssignmentStatus } from '../../core/models';

describe('Assignments', () => {
    const props = {
        courseId: 'courseId',
        assignments: [],
        updateAssignment: jest.fn(),
    };

    describe('render with no data', () => {
        it('renders properly', () => {
            const output = shallow(<Assignments {...props} />);
            expect(output).toMatchSnapshot();
        });
    });

    describe('render with data', () => {
        const nextProps = {
            ...props,
            assignments: [
                {
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
                        score: 100,
                        status: AssignmentStatus.Assigned,
                        studentComment: 'studentComment',
                        studentId: 'studentId',
                        taskId: 'taskId',
                        title: 'title',
                        urlToDescription: 'urlToDescription',
                        whoChecks: 'whoChecks',
                    },
                },
            ],
        };
        it('renders properly', () => {
            const output = shallow(<Assignments {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
    });
});
