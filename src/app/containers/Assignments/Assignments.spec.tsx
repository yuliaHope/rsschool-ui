import * as React from 'react';
import { shallow } from 'enzyme';
import AssignmentsContainer from './index';
const { __stateGetter } = require('react-redux');

describe('Assignments container', () => {
    beforeEach(() => {
        __stateGetter.mockImplementation(() => ({}));
    });
    const props = {
        courseId: 'courseId',
        isAdmin: false,
        userProfile: 'userProfile',
        assignments: [],
        isLoading: false,
        onLoad: jest.fn(),
        updateAssignment: jest.fn(),
    };

    describe('Initial render', () => {
        it('renders properly', () => {
            const output = shallow(<AssignmentsContainer {...props} />).dive();
            expect(output).toMatchSnapshot();
        });
    });

    describe('onLoad called from CDM', () => {
        it('dispatches onLoad', () => {
            expect(props.onLoad).toHaveBeenCalledTimes(1);
        });
    });

    describe('Assignments preloader', () => {
        const nextProps = {
            ...props,
            isLoading: true,
        };

        it('renders properly', () => {
            const output = shallow(<AssignmentsContainer {...nextProps} />).dive();
            expect(output).toMatchSnapshot();
        });
    });

    describe('Assignments render with data', () => {
        const nextProps = {
            ...props,
            assignments: [
                {
                    assignment: {
                        score: 100,
                    },
                },
            ],
        };

        it('renders properly', () => {
            const output = shallow(<AssignmentsContainer {...nextProps} />).dive();
            expect(output).toMatchSnapshot();
        });
    });
});
