import React from 'react';
import bem from '../../util/bem';
import Section from '../Section';

export const Error404 = () => {
    const b = bem('Error404');
    return (
        <Section viewport>
            <div className={b()}>
                <h1 className={b('Header')}>404</h1>
                <p>
                    Return to <a title="Back to homepage" href="/">homepage</a>
                </p>
            </div>
        </Section>
    );
};

export default Error404;
