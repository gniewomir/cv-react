import React from 'react';
import b from '../../util/bem';
const createLink = (type, href) => {
    switch (type) {
        case 'skype':
            return 'skype:'+href;
        case 'email':
            return 'mailto:'+href;
        case 'phone':
            return 'tel:'+href;
        default:
            return href;
    }
};

const Link = ({type, content, href, title, onClick, children, undecorated, uppercase, disabled}) => {
    return (
        <a
            className={b('Link')({type: type, undecorated: undecorated, uppercase: uppercase, disabled: disabled})}
            href={createLink(type, href)}
            title={title}
            onClick={
                (e) => {
                    if (typeof onClick === 'function') {
                        onClick(e);
                    }
                }
            }
        >
            {content}
            {children}
        </a>
    );
}

export default Link;