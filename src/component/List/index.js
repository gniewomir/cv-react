import React from 'react';
import b from '../../util/bem';

const List = ({horizontal, children}) => {
    return (
        <ul className={b('List')({horizontal: horizontal})}>
            {children}
        </ul>
    );
};

export default List;