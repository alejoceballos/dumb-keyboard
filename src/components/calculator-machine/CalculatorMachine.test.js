import React from 'react';
import { mount } from 'enzyme';
import CalculatorMachine from './CalculatorMachine';

describe('Calculator Machine', () => {
    it('should sum two numbers', () => {
        const calculator = mount(<CalculatorMachine />);
        calculator.find('[data-qa="dk-key-1"]').simulate('click');
        calculator.find('[data-qa="dk-key-+"]').simulate('click');
        calculator.find('[data-qa="dk-key-1"]').simulate('click');
        calculator.find('[data-qa="dk-key-="]').simulate('click');

        expect(calculator.find('[data-qa="result-display"]').text()).toBe('2');
    });
});
