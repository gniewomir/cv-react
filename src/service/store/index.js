import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            routerMiddleware,
            thunkMiddleware,
            createLogger()
        )
    )
};


