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
});
