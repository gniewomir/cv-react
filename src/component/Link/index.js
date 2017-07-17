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

const Link = ({type, content, href, title, onClick}) => {
    const handler = (e) => {
        e.preventDefault();
        onClick();
    };
    return (
        <a className={b('Link')({type: type})} href={createLink(type, href)} title={title} onClick={handler}>
            {content}
        </a>
    );
}

export default Link;