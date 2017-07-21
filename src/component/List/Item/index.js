import React from 'react';
import bem from '../../../util/bem';

const Item = ({ header, content, children }) => {
    const b = bem('Item');
    return (
        <li className={b()}>
            {header &&
                <span className={b('Header')}>
                    {header}
                </span>}
            {children}
            {content}
        </li>
    );
};

export default Item;
