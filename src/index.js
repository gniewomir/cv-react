import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch } from 'react-router';
import history from './service/history';
import { ConnectedRouter } from 'react-router-redux';

import { Provider } from 'react-redux';
import configureStore from './service/store';

import './index.css';

import App from './component/App';
import Error404 from './component/Error404';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route component={Error404} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

