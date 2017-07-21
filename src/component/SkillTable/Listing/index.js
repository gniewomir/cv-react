import React from 'react';
import Skill from '../Skill';
import bem from '../../../util/bem';

const Listing = ({ skills }) => {
    const b = bem('Listing');
    return (
        <div className={b()}>
            {skills.length === 0 &&
                <h1 className={b('NoResults')}>
                    Nothing. Try something diffrent. And stop asking about this
                    new cool Java Script framework!
                </h1>}
            {skills.map((skill, index) => {
                return <Skill key={index} {...skill} />;
            })}
        </div>
    );
};

export default Listing;
