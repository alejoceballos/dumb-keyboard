import React from 'react';
import { mount } from 'enzyme';
import CalculatorMachine from './CalculatorMachine';

describe('Calculator Machine', () => {
    describe('Display', () => {
        it('should display and equation', () => {
            const calculator = mount(<CalculatorMachine />);
            calculator.find('[data-qa="dk-key-1"]').simulate('click');
            calculator.find('[data-qa="dk-key-+"]').simulate('click');
            calculator.find('[data-qa="dk-key-2"]').simulate('click');
            calculator.find('[data-qa="dk-key--"]').simulate('click');
            calculator.find('[data-qa="dk-key-3"]').simulate('click');
            calculator.find('[data-qa="dk-key-x"]').simulate('click');
            calculator.find('[data-qa="dk-key-4"]').simulate('click');
            calculator.find('[data-qa="dk-key-÷"]').simulate('click');
            calculator.find('[data-qa="dk-key-5"]').simulate('click');
            calculator.find('[data-qa="dk-key-+"]').simulate('click');
            calculator.find('[data-qa="dk-key-6"]').simulate('click');
            calculator.find('[data-qa="dk-key--"]').simulate('click');
            calculator.find('[data-qa="dk-key-7"]').simulate('click');
            calculator.find('[data-qa="dk-key-x"]').simulate('click');
            calculator.find('[data-qa="dk-key-8"]').simulate('click');
            calculator.find('[data-qa="dk-key-÷"]').simulate('click');
            calculator.find('[data-qa="dk-key-9"]').simulate('click');
            calculator.find('[data-qa="dk-key--"]').simulate('click');
            calculator.find('[data-qa="dk-key-0"]').simulate('click');

            expect(calculator.find('[data-qa="result-display"]').text())
                .toBe('1 + 2 - 3 x 4 ÷ 5 + 6 - 7 x 8 ÷ 9 - 0');
        });
    });

    describe('Calculate', () => {
        it('should calculate using all four operations', () => {
            const calculator = mount(<CalculatorMachine />);
            calculator.find('[data-qa="dk-key-1"]').simulate('click');
            calculator.find('[data-qa="dk-key-+"]').simulate('click');
            calculator.find('[data-qa="dk-key-2"]').simulate('click');
            calculator.find('[data-qa="dk-key--"]').simulate('click');
            calculator.find('[data-qa="dk-key-3"]').simulate('click');
            calculator.find('[data-qa="dk-key-x"]').simulate('click');
            calculator.find('[data-qa="dk-key-4"]').simulate('click');
            calculator.find('[data-qa="dk-key-÷"]').simulate('click');
            calculator.find('[data-qa="dk-key-5"]').simulate('click');
            calculator.find('[data-qa="dk-key-+"]').simulate('click');
            calculator.find('[data-qa="dk-key-6"]').simulate('click');
            calculator.find('[data-qa="dk-key--"]').simulate('click');
            calculator.find('[data-qa="dk-key-7"]').simulate('click');
            calculator.find('[data-qa="dk-key-x"]').simulate('click');
            calculator.find('[data-qa="dk-key-8"]').simulate('click');
            calculator.find('[data-qa="dk-key-+"]').simulate('click');
            calculator.find('[data-qa="dk-key-9"]').simulate('click');
            calculator.find('[data-qa="dk-key--"]').simulate('click');
            calculator.find('[data-qa="dk-key-0"]').simulate('click');
            calculator.find('[data-qa="dk-key-="]').simulate('click');

            expect(calculator.find('[data-qa="result-display"]').text()).toBe('1');
        });
    });
});
