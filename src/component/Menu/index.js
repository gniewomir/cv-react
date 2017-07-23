import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from '../Observable/creators';

import bem from '../../util/bem';

import animateScrollTo from 'animated-scroll-to';

import document from '../../service/document';

import List from '../List';
import Item from '../List/Item';
import Link from '../Link';
import Progress from '../Progress';
import Auth from '../Auth';

class Menu extends Component {
    render() {
        const b = bem('Menu');
        const { observables } = this.props;
        const items = Object.values(observables).filter(
            observable => observable.menu === true
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
                <Progress progress={progress()} />
                <List horizontal nofold>
                    {items.map((item, index) => {
                        return (
                            <Item key={index}>
                                <span className={b('Item')}>
                                    <Link
                                        undecorated={
                                            top + 1 <=
                                            item.offsetTop ||
                                            top >=
                                            item.offsetTop +
                                            item.height
                                        }
                                        content={item.label}
                                        href="#"
                                        onClick={e => {
                                            e.preventDefault();
                                            animateScrollTo(
                                                item.offsetTop
                                            );
                                        }}
                                    />
                                </span>
                            </Item>
                        );
                    })}
                    <Item right>
                        <Auth />
                    </Item>
                </List>
            </nav >
        );
    }
}

export default connect(
    (state, ownProps) => {
        return { observables: state.observables.observables };
    },
    dispatch => {
        return bindActionCreators(creators, dispatch);
    }
)(Menu);
