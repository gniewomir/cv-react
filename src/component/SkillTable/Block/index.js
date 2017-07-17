import React from 'react';
import b from '../../../util/bem';

const Block = ({enabled, important, focus, children, position}) => {
    return (
        <div className={b('Block')({enabled: enabled, important: important, focus: focus})({position: ''+position})}>
            {children}
        </div>
    );
};

export default  Block;