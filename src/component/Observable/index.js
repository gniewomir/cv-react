import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as creators from './creators.js';

class Observable extends Component {

    componentWillUnmount() {
        this.props.removeObservable(this.props.name);
    }

    render() {
        const { menu, label, name } = this.props;
        const refCallback = observable => {
            if (observable === null) {
                return;
            }
            this.props.registerObservable(
                this.props.name,
                observable,
                {
                    menu: menu,
                    label: label,
                    name: name
                }
            );
        };
        return (
            <div ref={refCallback}>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    null,
    dispatch => {
        return bindActionCreators(creators, dispatch);
    }
)(Observable);
