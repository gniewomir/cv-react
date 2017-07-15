import React, { Component } from 'react';
import block from '../../util/bem';

class Column extends Component {
    render() {
        let {rightborder, leftborder, rightgutter, leftgutter, children} = this.props;
        const b = block('Column');
        return (
            <div className={b({rightborder: rightborder, leftborder: leftborder, rightgutter: rightgutter, leftgutter: leftgutter})}>
                {children}
            </div>
        );
    }
}

export default Column;
