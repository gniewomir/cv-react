import React, { Component } from 'react';
import block from '../../../util/bem';
import { makeSafeForCssClass } from '../../../util/css';

class Block extends Component {
    render() {
        let {enabled, important, children} = this.props;
        return (
            <div className={block('Block')({enabled: enabled, important: important, background: makeSafeForCssClass(children)})}>
                {children}
            </div>
        );
    }
}

export default Block;
