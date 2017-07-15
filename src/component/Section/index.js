import React, { Component } from 'react';
import block from '../../util/bem';

class Section extends Component {
    render() {
        const b = block('Section');
        return (
            <section className={b({centered: this.props.centered})}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;
