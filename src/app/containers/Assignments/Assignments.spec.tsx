import { shallow } from 'enzyme';
import * as React from 'react';
import Assignments from './index';
const { __stateGetter } = require('react-redux');

const noop = () => {};

describe('Assignments', () => {
    beforeEach(() => {
        __stateGetter.mockImplementation(() => ({}));
    });

    it('renders correctly', () => {
        const output = shallow(<Assignments assignments={[]} fetchAllAssignments={noop} updateAllAssignments={noop} />);
        expect(output).toMatchSnapshot();
    });
});
