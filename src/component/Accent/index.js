import React from 'react';
import b from '../../util/bem';

const Accent = ({children}) => {
    return (
        <span className={b('Accent')}>
            {children}
        </span>
    );
};

export default Accent;
