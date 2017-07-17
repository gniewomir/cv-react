import React from 'react';
import b from '../../../util/bem';

const Block = ({enabled, important, children, position}) => {
    return (
        <div className={b('Block')({enabled: enabled, important: important})({position: ''+position})}>
            {children}
        </div>
    );
};

export default  Block;