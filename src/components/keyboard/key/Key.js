import React from 'react';
import { lowerCase } from 'voca';
import PropTypes from 'prop-types';

const Key = ({ value, display, onClick }) => (
    <button className="dk-key" data-qa={`key-${lowerCase(value)}`} onClick={() => onClick(value)}>
        {display}
    </button>
);

Key.propTypes = {
    value: PropTypes.string.isRequired,
    display: PropTypes.string,
    onClick: PropTypes.func
};

Key.defaultProps = {
    display: '',
    onClick: () => {}
};

export default Key;
