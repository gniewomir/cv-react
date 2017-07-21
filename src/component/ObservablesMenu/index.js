import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../service/store/creator/observable';

import bem from '../../util/bem';

import animateScrollTo from 'animated-scroll-to';

import List from '../List';
import Item from '../List/Item';
import Link from '../Link';
import ScrollProgress from '../ScrollProgress';

class ObservablesMenu extends Component {
    render() {
        const b = bem('ObservablesMenu');
        const { observables, items } = this.props;
        const common = Object.keys(observables).filter(
            key => typeof items[key] !== undefined
        );
        const top = document.body.scrollTop;
        const progress = () => {
            const h = document.documentElement;
            const b = document.body;
            const st = 'scrollTop';
            const sh = 'scrollHeight';
            return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
        };
        return (
            <nav className={b()}>
                <ScrollProgress progress={progress()} />
                <List horizontal nofold>
                    {common.map((key, index) => {
                        return (
                            <Item key={index}>
                                <span className={b('Item')}>
                                    <Link
                                        undecorated={
                                            top + 1 <=
                                                observables[key].offsetTop ||
                                            top >=
                                                observables[key].offsetTop +
                                                    observables[key].height
                                        }
                                        content={items[key].label}
                                        href="#"
                                        onClick={e => {
                                            e.preventDefault();
                                            animateScrollTo(
                                                observables[key].offsetTop
                                            );
                                        }}
                                    />
                                </span>
                            </Item>
                        );
                    })}
                </List>
            </nav>
        );
    }
}

export default connect(
    (state, ownProps) => {
        return { observables: state.ObservableReducer.observables };
    },
    dispatch => {
        return bindActionCreators(actions, dispatch);
    }
)(ObservablesMenu);
