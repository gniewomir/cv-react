import React, { Component } from 'react';
import block from '../../util/bem';

class List extends Component {
    render() {
        return (
            <ul className={block('List')}>
                {this.props.children}
            </ul>
        );
    }
}

export default List;
