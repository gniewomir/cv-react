import React from 'react';
import b from '../../util/bem';

const Section = ({ css, children, viewport }) => {
    if (!viewport) {
        return (
            <section className={b('Section').mix(css)}>
                {children}
            </section>
        );
    }

    return (
        <section className={b('Section')({ viewport: viewport }).mix(css)}>
            <div className={b('Section')('outer')}>
                <div className={b('Section')('middle')}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
