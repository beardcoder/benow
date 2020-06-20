import { shallow } from 'enzyme';
import React from 'react';

import Component from '../../src/components/Card';

describe('Test Card', () => {
    it('have a chrildren', () => {
        function Child() {
            return <span className='child'>aChildren</span>;
        }
        const element = shallow(
            <Component>
                <Child />
            </Component>
        );
        expect(element.find(Child)).toHaveLength(1);
    });
});
