import React from 'react';
import b from '../../util/bem';

const Row = props => {
    return (
        <div
            className={b('Row')({ border: props.border, gutter: props.gutter })}
        >
            {props.children}
        </div>
    );
};

export default Row;
