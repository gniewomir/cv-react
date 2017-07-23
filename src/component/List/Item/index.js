import React from 'react';
import bem from '../../../util/bem';

const Item = ({ header, content, children, left, right }) => {
    const b = bem('Item');
    return (
        <li className={b({ left: left, right: right })}>
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
