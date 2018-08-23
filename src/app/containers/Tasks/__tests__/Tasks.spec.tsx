import { shallow } from 'enzyme';
import * as React from 'react';
import Tasks from '../index';
const { __stateGetter } = require('react-redux');

describe('Tasks', () => {
    beforeEach(() => {
        __stateGetter.mockImplementation(() => ({}));
    });

    it('renders correctly with data ', () => {
        const output = shallow(
            <Tasks
                onLoad={jest.fn()}
                submitTask={jest.fn()}
                studentId={'nikkaktus24'}
                courseId={'rs-course-2018q3'}
                isLoading={false}
                error={undefined}
                assignments={[
                    {
                        title: 'Test task',
                        urlToDescription: 'Test description',
                        taskId: 'testTaskId',
                        studentId: 'nikkaktus24',
                        status: 'Assigned',
                        score: null,
                        courseId: 'rs-course-2018q3',
                    },
                ]}
            />,
        );
        expect(output).toMatchSnapshot();
    });

    it('renders correctly if no data', () => {
        const output = shallow(
            <Tasks
                onLoad={jest.fn()}
                submitTask={jest.fn()}
                studentId={''}
                courseId={''}
                isLoading={false}
                error={undefined}
                assignments={[]}
            />,
        );
        expect(output).toMatchSnapshot();
    });
});
