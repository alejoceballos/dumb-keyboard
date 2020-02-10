import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from './Keyboard';
import { shallow } from 'enzyme';

describe('Keyboard', () => {
  it('should render without errors', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Keyboard />, container);
  });

  it('should find a simple key', () => {
    const keyboardLayout = ['A'];
    const wrapper = shallow(<Keyboard layout={keyboardLayout} />);

    expect(wrapper.find('[data-qa="key-a"]').text()).toEqual('A');
  });

  it('should accept a dynamic set of keys', () => {
    const keyboardLayout = ['A', 'B', 'C'];
    const wrapper = shallow(<Keyboard layout={keyboardLayout} />);

    expect(wrapper.find('[data-qa="key-a"]').text()).toEqual('A');
    expect(wrapper.find('[data-qa="key-b"]').text()).toEqual('B');
    expect(wrapper.find('[data-qa="key-c"]').text()).toEqual('C');
  });
});
