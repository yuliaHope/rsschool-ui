import * as React from 'react';
import { shallow } from 'enzyme';
import { TaskHeader } from './TaskHeader';
import { AssignmentStatus } from '../../core/models';

describe('Task Item', () => {
    const props = {
        status: AssignmentStatus.Assigned,
        score: 0,
    };
    describe('render Task Header', () => {
        it('in case status is Assigned', () => {
            const output = shallow(<TaskHeader {...props} />);
            expect(output).toMatchSnapshot();
        });
        it('in case status is MissedDeadline', () => {
            const nextProps = {
                ...props,
                status: AssignmentStatus.MissedDeadline,
            };
            const output = shallow(<TaskHeader {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
        it('in case status is Checked && score >= 100', () => {
            const nextProps = {
                status: AssignmentStatus.Checked,
                score: 100,
            };
            const output = shallow(<TaskHeader {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
        it('in case status is Checked && score < 100', () => {
            const nextProps = {
                status: AssignmentStatus.Checked,
                score: 99,
            };
            const output = shallow(<TaskHeader {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
        it('in case status is ReadyForReview', () => {
            const nextProps = {
                ...props,
                status: AssignmentStatus.ReadyForReview,
            };
            const output = shallow(<TaskHeader {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
        it('in case status is Rejected', () => {
            const nextProps = {
                ...props,
                status: AssignmentStatus.Rejected,
            };
            const output = shallow(<TaskHeader {...nextProps} />);
            expect(output).toMatchSnapshot();
        });
    });
});
