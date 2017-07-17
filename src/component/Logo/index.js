import React from 'react';
import b from '../../util/bem';
import Svg from '../../image/svg/Logo.svg';

const Logo = () => {
    return (
        <img className={b('Logo')} src={Svg} alt="Enraged Gniewomir Świechowski - logo" />
    );
}

export default Logo;