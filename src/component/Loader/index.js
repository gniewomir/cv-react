import React from 'react';
import bem from '../../util/bem';

const Loader = () => {
    const b = bem('Loader');
    return (
        <div className={b('Grid')}>
            <div className={b('Cube1')} />
            <div className={b('Cube2')} />
            <div className={b('Cube3')} />
            <div className={b('Cube4')} />
            <div className={b('Cube5')} />
            <div className={b('Cube6')} />
            <div className={b('Cube7')} />
            <div className={b('Cube8')} />
            <div className={b('Cube9')} />
        </div>
    );
};

export default Loader;
