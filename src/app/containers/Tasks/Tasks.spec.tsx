import { shallow } from 'enzyme';
import * as React from 'react';
import Tasks from './index';
import { AssignmentStatus } from '../../core/models';
const { __stateGetter } = require('react-redux');

describe('Tasks container', () => {
    beforeEach(() => {
        __stateGetter.mockImplementation(() => ({}));
    });
    const props = {
        courseId: 'courseId',
        userGitId: 'userGitId',
        assignments: [],
        loading: false,
        error: null,
        solutionError: null,
        fetchAssignmentsData: jest.fn(),
        fetchAssignmentSolution: jest.fn(),
    };
    describe('render without assignments', () => {
        it('render tasks container', () => {
            const output = shallow(<Tasks {...props} />).dive();
            expect(output).toMatchSnapshot();
        });
    });
    describe('calls fetchAssignmentsData', () => {
        it('dispatches fetchAssignmentsData', () => {
            expect(props.fetchAssignmentsData).toHaveBeenCalledTimes(1);
        });
    });
    describe('render Tasks preloader', () => {
        const nextProps = {
            ...props,
            loading: true,
        };
        it('render with preloader', () => {
            const output = shallow(<Tasks {...nextProps} />).dive();
            expect(output).toMatchSnapshot();
        });
    });
    describe('Tasks render with assignments', () => {
        const nextProps = {
            ...props,
            loading: false,
            assignments: [
                {
                    _id: '_id',
                    assignmentRepo: 'assignmentRepo',
                    checkDate: 123,
                    completeDate: 123,
                    courseId: 'courseId',
                    deadlineDate: 123,
                    mentorComment: 'mentorComment',
                    mentorId: 'mentorId',
                    score: 90,
                    status: AssignmentStatus.Assigned,
                    studentComment: 'studentComment',
                    studentId: 'studentId',
                    taskId: 'taskId',
                    title: 'title',
                },
            ],
        };
        it('render properly', () => {
            const output = shallow(<Tasks {...nextProps} />).dive();
            expect(output).toMatchSnapshot();
        });
    });
});
