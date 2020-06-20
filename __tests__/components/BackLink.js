import { shallow } from 'enzyme';
import React from 'react';

import BackLink from '../../src/components/BackLink';

describe('Test Backlink', () => {
    it('Have a text', () => {
        const component = shallow(<BackLink />);
        expect(component.find('span').text()).toEqual('Zurück');
    });

    it('have a href', () => {
        const component = shallow(<BackLink />);
        expect(component.prop('href')).toEqual('/#blog');
    });
});
