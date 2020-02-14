import React from 'react';
import Keyboard from '../components/keyboard';
import Key from '../components/keyboard/key';

export default {
    title: 'Keyboard',
    component: Keyboard
};

export const BasicKeyboard = () => {
    const keyboardKeys = [
        <Key key="dk-key-a" value="A" />,
        <Key key="dk-key-b" value="B" />,
        <Key key="dk-key-c" value="C" />
    ];

    return <Keyboard keys={keyboardKeys} />;
};
