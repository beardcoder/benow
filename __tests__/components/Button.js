import { shallow } from 'enzyme';
import React from 'react';

import Button from '../../src/components/Button';

describe('Test Button', () => {
    it('have a href', () => {
        const component = shallow(<Button href='/aLink' />);
        expect(component.prop('href')).toEqual('/aLink');
    });

    it('have a chrildren', () => {
        function Child() {
            return <span className='child'>aChildren</span>;
        }
        const component = shallow(
            <Button>
                <Child />
            </Button>
        );
        expect(component.find(Child)).toHaveLength(1);
    });
});
