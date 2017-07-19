import React from 'react';
import bem from '../../util/bem';
import Svg from '../../image/svg/arrow.svg';

const Arrows = () => {
    const b = bem('Arrows');
    return (
        <div className={b()}>
            <div className={b('Arrow')('Up')}>
                <img className={b('Image')} width="40" height="40" alt="Arrow pointing up." src={Svg} />
            </div>
            <div className={b('Arrow')('Down')}>
                <img className={b('Image')} width="40" height="40" alt="Arrow pointing down." src={Svg} />
            </div>
        </div>
    );
}

export default Arrows;