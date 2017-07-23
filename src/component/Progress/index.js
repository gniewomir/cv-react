import React, { Component } from 'react';
import bem from '../../util/bem';

export default class Progress extends Component {
    render() {
        const b = bem('Progress');
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
