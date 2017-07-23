import * as action from './actions.js';

export default (state, newAction) => {
    if (state === undefined) {
        return {
            observables: {},
            running: false
        };
    }
    switch (newAction.type) {
        case action.OBSERVABLE_START:
            return {
                ...state,
                running: true
            };
        case action.OBSERVABLE_STOP:
            return {
                ...state,
                running: false
            };
        case action.OBSERVABLE_REGISTER:
            return {
                ...state,
                observables: {
                    ...state.observables,
                    ...newAction.payload
                }
            };
        case action.OBSERVABLE_REMOVE:
            delete state.observables[newAction.payload];
            return {
                ...state,
                observables: {
                    ...state.observables
                }
            };
        case action.OBSERVABLE_UPDATE:
            return {
                ...state,
                observables: newAction.payload
            };
        default:
            return state;
    }
};
