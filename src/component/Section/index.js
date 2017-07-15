import React, { Component } from 'react';
import block from '../../util/bem';

class Section extends Component {
    render() {
        return (
            <section className={block('Section')}>
                {this.props.children}
            </section>
        );
    }
}

export default Section;
