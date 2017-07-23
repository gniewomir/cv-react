import * as action from './actions.js';

export const authenticationSuccess = (payload) => {
    return {
        type: action.AUTH_SUCCESS,
        payload: payload
    }
}

export const authenticationError = (error) => {
    return {
        type: action.AUTH_ERROR,
        payload: error
    }
}

export const authenticationRefuse = () => {
    return {
        type: action.AUTH_REFUSE
    }
}