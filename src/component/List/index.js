import React, { Component } from 'react';
import block from '../../util/bem';

class List extends Component {
    render() {
        let {horizontal, children, cssclass} = this.props;
        const b = block('List');
        return (
            <ul className={b({horizontal: horizontal}).mix(cssclass)}>
                {children}
            </ul>
        );
    }
}

export default List;
