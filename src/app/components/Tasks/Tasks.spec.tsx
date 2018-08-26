import { shallow } from 'enzyme';
import * as React from 'react';
import Tasks from './index';
import { IAssignmentStatus } from 'core/models';

describe('Tasks', () => {
    it('renders correctly ', () => {
        const output = shallow(
            <Tasks
                data={[
                    {
                        taskId: 'Assignment',
                        courseId: '123',
                        studentId: '123',
                        status: IAssignmentStatus.Assigned,
                        mentorId: '123',
                        studentComment: '123',
                        mentorComment: '123',
                        score: 0,
                        assignmentRepo: 'github.com/loveTriangle',
                        deadlineDate: new Date(2018, 9, 30, 23, 59),
                        completeDate: 123,
                        checkDate: 123,
                    },
                ]}
                assign={jest.fn()}
            />,
        );
        expect(output).toMatchSnapshot();
    });

    it('renders correctly if no data', () => {
        const output = shallow(<Tasks data={[]} assign={() => {}} />);
        expect(output).toMatchSnapshot();
    });
});
