import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Key from './key';
import Keyboard from '.';

describe('Keyboard', () => {
    it('should render without errors', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Keyboard keys={[]} />, container);
    });

    it('should find a simple key', () => {
        const keys = [<Key key="dk-key-a" value="A" />];
        const wrapper = mount(<Keyboard keys={keys} />);

        expect(wrapper.find('[data-qa="key-a"]').first().text()).toEqual('A');
    });

    it('should accept a dynamic set of keys', () => {
        const keyboardKeys = [
            <Key key="dk-key-a" value="A" />,
            <Key key="dk-key-b" value="B" />,
            <Key key="dk-key-c" value="C" />
        ];
        const wrapper = mount(<Keyboard keys={keyboardKeys} />);

        expect(wrapper.find('[data-qa="key-a"]').first().text()).toEqual('A');
        expect(wrapper.find('[data-qa="key-b"]').first().text()).toEqual('B');
        expect(wrapper.find('[data-qa="key-c"]').first().text()).toEqual('C');
    });
});
