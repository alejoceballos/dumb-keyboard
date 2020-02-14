import React from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import Key from './key';

const Keyboard = ({ keys }) => <div>{map(keys, key => key)}</div>;

Keyboard.propTypes = {
    keys: PropTypes.arrayOf(PropTypes.objectOf(Key)).isRequired
};

export default Keyboard;
