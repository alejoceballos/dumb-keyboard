import React from 'react';
import Keyboard from '../components/Keyboard/Keyboard';

export default {
    title: 'Keyboard',
    component: Keyboard
};

export const BasicKeyboard = () => <Keyboard layout={['A', 'B', 'C']} />;
