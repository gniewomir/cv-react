import React, { Component } from 'react';
import bem from '../../util/bem';

export default class ScrollProgress extends Component {
    render() {
        const b = bem('ScrollProgress');
        return (
            <div className={b()}>
                <div
                    className={b('Progress')}
                    style={{ width: `${this.props.progress}%` }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
