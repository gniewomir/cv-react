import React from 'react';
import b from '../../util/bem';

const Section = ({css, children}) => {
    return (
        <section className={b('Section').mix(css)}>
            {children}
        </section>
    );
};

export default Section;
