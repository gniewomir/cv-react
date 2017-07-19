import * as action from '../action/observable';
import throttle from 'lodash.throttle';

const Observables = {};
let Observer = false;

const getObservableStatus = (name) => {
    const ref = Observables[name];
    const rect = ref.getBoundingClientRect();
    const height = window.innerHeight;
    const width = window.innerWidth;
    return {
        offsetTop: ref.offsetTop,
        height: ref.offsetHeight,
        width: ref.offsetWidth,
        visibility: {
            top:     rect.top >= 0,
            bottom:  rect.bottom <= height,
            left:    rect.left >= 0,
            right:   rect.right <= width,
            whole:   rect.top >= 0 && rect.left >= 0 && rect.bottom <= height && rect.right <= width
        }
    }
}

const observe = () => (dispatch) => {
    window.addEventListener(
        'scroll',
        Observer = throttle(
            () => {
                const observablesVisibility = {};
                Object.keys(Observables).forEach(
                    name => {
                        observablesVisibility[name] = getObservableStatus(name);
                    }
                );
                dispatch(update(observablesVisibility));
                return {
                    type: action.OBSERVABLE_START
                }
            },
            100
        )
    );
}

const stop = () => (dispatch) => {
    window.removeEventListener(
        'scroll',
        Observer
    );
    Observer = false;
    return {
        type: action.OBSERVABLE_STOP
    }
}

const update = (update) => {
    return {
        type: action.OBSERVABLE_UPDATE,
        payload: update
    }
}

const register = (name, ref) => {
    const payload = {};
    Observables[name] = ref;
    payload[name] = getObservableStatus(name);
    return {
        type: action.OBSERVABLE_REGISTER,
        payload: payload
    }
}

export const removeObservable = (name) => {
    return dispatch => {
        if (Object.keys(Observables).length === 0) {
            dispatch(stop());
        }
        delete Observables[name];
        return {
            type: action.OBSERVABLE_REMOVE,
            payload: name
        }
    }
}

export const registerObservable = (name, ref) => {
    return dispatch => {
        if (Observer === false) {
            dispatch(observe());
        }
        dispatch(register(name, ref));
    }
}
