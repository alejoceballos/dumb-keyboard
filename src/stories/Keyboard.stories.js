import React from 'react';
import Keyboard from '../components/keyboard';
import Key from '../components/keyboard/key';

export default {
    title: 'Keyboard',
    component: Keyboard
};

export const BasicKeyboard = () => {
    const keyboardKeys = [
        <Key key="dk-key-a" display="A" value="a" />,
        <Key key="dk-key-b" display="B" value="b" />,
        <Key key="dk-key-c" display="C" value="c" />
    ];

    return <Keyboard keys={keyboardKeys} />;
};
