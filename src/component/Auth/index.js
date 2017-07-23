import React, { Component } from 'react';

import * as creators from './creators.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import config from '../../data/config.json';
import GoogleLogin from 'react-google-login';

import bem from '../../util/bem';

class Auth extends Component {
    render() {
        const b = bem('Auth');
        return (
            <span className={b()}>
                {
                    !this.props.auth.authenticated &&
                    <GoogleLogin
                        clientId={config.google.clientId}
                        onSuccess={this.props.authenticationSuccess}
                        onFailure={this.props.authenticationError}
                        className={b('Link')}
                        tag="A"
                    >
                        login
                    </GoogleLogin >
                }
                {
                    this.props.auth.authenticated &&
                    <span className={b('Welcome')}>Hi, {this.props.auth.profile.givenName || this.props.auth.profile.email}!
                        (<a className={b('Link')} onClick={this.props.authenticationRefuse}>logout</a>)
                    </span>
                }
            </span>
        );
    }
}

export default connect(
    (state, ownProps) => {
        return {
            auth: state.auth
        };
    },
    dispatch => {
        return bindActionCreators(creators, dispatch);
    }
)(Auth);