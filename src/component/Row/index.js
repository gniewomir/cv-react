import React, { Component } from 'react';
import block from '../../util/bem';

class Row extends Component {
    render() {
        return (
            <div className={block('Row')}>
                {this.props.children}
            </div>
        );
    }
}

export default Row;
