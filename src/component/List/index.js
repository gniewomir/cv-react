import React from 'react';
import b from '../../util/bem';

const List = ({ horizontal, centered, children, nofold }) => {
    return (
        <ul
            className={b('List')({
                horizontal: horizontal,
                centered: centered,
                nofold: nofold
            })}
        >
            {children}
        </ul>
    );
};

export default List;
