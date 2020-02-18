import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Key from '.';

describe('Key', () => {
    it('should render without errors', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Key value="x" />, container);
    });

    it('should inform that it was pressed', () => {
        const onClickMock = jest.fn();
        const wrapper = shallow(<Key value="x" onClick={onClickMock} />);

        wrapper.simulate('click');
        expect(onClickMock).toBeCalledWith('x');
    });

    it('should display a different value from the one sent when pressed', () => {
        const onClickMock = jest.fn();
        const wrapper = shallow(<Key display="x" value="y" onClick={onClickMock} />);

        wrapper.simulate('click');
        expect(wrapper.text()).toBe('x');
        expect(onClickMock).toBeCalledWith('y');
    });

    it('should not enforce anything being displayed on the key', () => {
        const wrapper = shallow(<Key value="y" />);
        expect(wrapper.text()).toBe('');
    });
});
