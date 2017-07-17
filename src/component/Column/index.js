import React from 'react';
import b from '../../util/bem';

const Column = (props) => {
    return (
        <div className={b('Column')}>
            {props.children}
        </div>
    );
}

export default Column;
