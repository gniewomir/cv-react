import React, { Component } from 'react';
import block from '../../util/bem';

class Link extends Component {

    getProtocol(type) {
        switch (type) {
            case 'skype':
                return 'skype:';
            case 'email':
                return 'mailto:';
            case 'phone':
                return 'tel:';
            default:
                return '';
        }
    }

    render() {
        let {type, content, href, title} = this.props
        if (!href) {
            throw new Error('You have to provide href for Link component');
        }
        if (!content) {
            content = href;
        }
        if (!title) {
            title = content;
        }
        return (
            <a className={block('Link')({type: type})} href={this.getProtocol(type)+href} title={title}>
                {content}
            </a>
        );
    }
}

export default Link;
