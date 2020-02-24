import React from 'react';
import Key from '../components/keyboard/key';
import './Key.css';
import { BikeImage, TabImage } from './Images';

export default {
    title: 'Key',
    component: Key
};

export const BasicKey = () => <Key value="x">X</Key>;

export const TabKeyWithBackgroundImage = () => <Key value="tab" />;

export const TabKeyWithEmbeddedSvgImage = () => (
    <Key value="tabV2">
        <TabImage />
    </Key>
);

export const BikeKey = () => (
    <Key value="bike">
        <BikeImage />
    </Key>
);
