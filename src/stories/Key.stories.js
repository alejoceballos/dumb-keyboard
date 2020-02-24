import React from 'react';
import Key from '../components/keyboard/key';
import './Key.css';
import { BikeImage } from './Images';

export default {
    title: 'Key',
    component: Key
};

export const BasicKey = () => <Key value="x">X</Key>;

export const TabKey = () => <Key value="tab" />;

export const BikeKey = () => (
    <Key value="bike">
        <BikeImage />
    </Key>
);
