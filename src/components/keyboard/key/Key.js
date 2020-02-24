import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ value, onClick, children }) => {
    const keyIdentifier = `dk-key-${value ? value.toLowerCase() : 'NO-VALUE'}`;
    return (
        <button className={`dk-key ${keyIdentifier}`} data-qa={keyIdentifier} onClick={() => onClick(value)}>
            {children || ''}
        </button>
    );
};

Key.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func
};

Key.defaultProps = {
    onClick: () => {}
};

export default Key;
