import React from 'react';
import Keyboard from '../components/keyboard';
import Key from '../components/keyboard/key';

export default {
    title: 'Keyboard',
    component: Keyboard
};

export const BasicKeyboard = () => {
    const keyboardKeys = [
        <Key key="dk-key-a" value="a">A</Key>,
        <Key key="dk-key-b" value="b">B</Key>,
        <Key key="dk-key-c" value="c">C</Key>
    ];

    return <Keyboard keys={keyboardKeys} />;
};
