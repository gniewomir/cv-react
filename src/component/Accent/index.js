import React, { Component } from 'react';
import block from '../../util/bem';

class Accent extends Component {
    render() {
        return (
            <span className={block('Accent')}>
                {this.props.children}
            </span>
        );
    }
}

export default Accent;
