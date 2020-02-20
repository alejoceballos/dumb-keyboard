import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ value, display, onClick }) => {
    const keyIdentifier = `dk-key-${value ? value.toLowerCase() : 'NO-VALUE'}`;
    return (
        <button className={`dk-key ${keyIdentifier}`} data-qa={keyIdentifier} onClick={() => onClick(value)}>
            {display}
        </button>
    );
};

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
