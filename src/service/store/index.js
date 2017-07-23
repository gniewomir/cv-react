import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducer.js';
import { routerMiddleware } from 'react-router-redux';
import history from '../history';

const middleware = [
    routerMiddleware(history),
    thunkMiddleware
]

if (process.env.NODE_ENV === 'development') {
    middleware.push(
        createLogger({
            collapsed: (getState, action, logEntry) => !logEntry.error
        })
    );
}

export default preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            ...middleware
        )
    );
}
