import React from 'react';
import ReactDOM from 'react-dom';

import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import { Provider } from 'react-redux';
import configureStore from './service/store';

import './index.css';

import App from './component/App';
import Error404 from './component/Error404';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={createHistory()}>
          <div>
            <Route exact path='/' component={App}/>
            <Route path='*' component={Error404}/>
          </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
