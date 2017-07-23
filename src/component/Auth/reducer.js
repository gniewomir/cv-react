import * as action from './actions.js';

export default (state, newAction) => {
    if (state === undefined) {
        return {
            profile: {},
            token: {},
            authenticated: false,
            error: false
        };
    }
    switch (newAction.type) {
        case action.AUTH_SUCCESS:
            return {
                ...state,
                profile: {
                    ...newAction.payload.profileObj
                },
                token: {
                    ...newAction.payload.tokenObj
                },
                error: false,
                authenticated: true
            };
        case action.AUTH_ERROR:
            return {
                ...state,
                error: {
                    ...newAction.payload
                },
                authenticated: false
            };
        case action.AUTH_REFUSE:
            return {
                ...state,
                profile: {},
                token: {},
                error: false,
                authenticated: false
            };
        default:
            return state;
    }
};
