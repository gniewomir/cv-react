import React from 'react';
import Skill from '../Skill';

const Listing = ({skills}) => {
    return (
        <div>
            {skills.length === 0 &&
                <h1>Nothing. You are asking about newest Java Script framework? Try something diffrent.</h1>
            }
            {skills.map((skill, index) => {
                return (<Skill key={index} {...skill} />)
            })}
        </div>
    );
}

export default Listing;