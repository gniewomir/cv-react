import React, { Component } from 'react';
import block from '../../util/bem';

class Column extends Component {
    render() {
        return (
            <div className={block('Column')}>
                {this.props.children}
            </div>
        );
    }
}

export default Column;
