import React, { Component } from 'react';
import block from '../../util/bem';

class Row extends Component {
    render() {
        const b = block('Row');
        return (
            <div className={b()}>
                {this.props.children}
            </div>
        );
    }
}

export default Row;
