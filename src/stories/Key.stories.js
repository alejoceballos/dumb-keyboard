import React from 'react';
import Key from '../components/keyboard/key';
import './Key.css';

export default {
    title: 'Key',
    component: Key
};

export const BasicKey = () => <Key display="X" value="x" />;

export const TabKey = () => <Key display="." value="tab" />;
