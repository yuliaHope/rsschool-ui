import * as React from 'react';
import { shallow } from 'enzyme';
import AssignmentItemBody from './AssignmentItemBody';

describe('Assignment Item Body', () => {
    const props = {
        title: '',
        urlToDescription: '',
    };

    it('render with no data', () => {
        const output = shallow(<AssignmentItemBody {...props} />);
        expect(output).toMatchSnapshot();
    });

    it('render with data', () => {
        const nextProps = {
            ...props,
            title: 'title',
            urlToDescription: 'urlToDescription',
        };
        const output = shallow(<AssignmentItemBody {...nextProps} />);
        expect(output).toMatchSnapshot();
    });
});
