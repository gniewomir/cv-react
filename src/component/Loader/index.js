import React from 'react';
import bem from '../../util/bem';

const Loader = () => {
    const b = bem('Loader');
    return (
        <div className={b('Grid')}>
            <div className={b('Cube1')}></div>
            <div className={b('Cube2')}></div>
            <div className={b('Cube3')}></div>
            <div className={b('Cube4')}></div>
            <div className={b('Cube5')}></div>
            <div className={b('Cube6')}></div>
            <div className={b('Cube7')}></div>
            <div className={b('Cube8')}></div>
            <div className={b('Cube9')}></div>
        </div>
    );
}

export default Loader;