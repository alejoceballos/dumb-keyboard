import React from 'react';
import Key from '../components/keyboard/key';
import './Key.css';

export default {
    title: 'Key',
    component: Key
};

export const BasicKey = () => <Key value="x">X</Key>;

export const TabKey = () => <Key value="tab" />;
