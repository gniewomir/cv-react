import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../service/store/creator/observable';

class Observable extends Component {
    componentWillUnmount() {
        this.props.removeObservable(this.props.name);
    }

    render() {
        const refCallback = observable => {
            if (observable === null) {
                return;
            }
            this.props.registerObservable(this.props.name, observable);
        };
        return (
            <div ref={refCallback}>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => {
        return { name: ownProps.name };
    },
    dispatch => {
        return bindActionCreators(actions, dispatch);
    }
)(Observable);
