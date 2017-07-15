import React, { Component } from 'react';
import block from '../../../util/bem';

class Item extends Component {
    render() {
        return (
            <li className={block('Item')}>
                {this.props.header &&
                    <span className={block('Item')('Header')}>{this.props.header}</span>
                }
                {this.props.children}
                {this.props.content}
            </li>
        );
    }
}

export default Item;
