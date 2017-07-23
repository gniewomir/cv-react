import * as action from './actions.js';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import window from '../../service/window';

const Observables = {};
let ObserverScroll = false;
let ObserverResize = false;

const getObservableStatus = (name) => {
    const ref = Observables[name].ref;
    const rect = ref.getBoundingClientRect();
    const height = window.innerHeight;
    const width = window.innerWidth;
    return {
        ...Observables[name].extra,
        offsetTop: ref.offsetTop,
        height: ref.offsetHeight,
        width: ref.offsetWidth,
        visibility: {
            top: rect.top >= 0,
            bottom: rect.bottom <= height,
            left: rect.left >= 0,
            right: rect.right <= width,
            whole:
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= height &&
            rect.right <= width
        }
    };
};

const observe = () => dispatch => {
    window.addEventListener(
        'scroll',
        (ObserverScroll = throttle(() => {
            const observablesData = {};
            Object.keys(Observables).forEach(name => {
                observablesData[name] = getObservableStatus(name, observablesData[name]);
            });
            dispatch(update(observablesData));
            return {
                type: action.OBSERVABLE_START
            };
        }, 16)),
        false
    );
    window.addEventListener(
        'resize',
        (ObserverResize = debounce(() => {
            const observablesData = {};
            Object.keys(Observables).forEach(name => {
                observablesData[name] = getObservableStatus(name, observablesData[name]);
            });
            dispatch(update(observablesData));
            return {
                type: action.OBSERVABLE_START
            };
        }, 16)),
        false
    );
};

const stop = () => dispatch => {
    window.removeEventListener('scroll', ObserverScroll);
    ObserverScroll = false;
    window.removeEventListener('resize', ObserverResize);
    ObserverResize = false;
    return {
        type: action.OBSERVABLE_STOP
    };
};

const update = update => {
    return {
        type: action.OBSERVABLE_UPDATE,
        payload: update
    };
};

const register = (name, ref, extra) => {
    Observables[name] = {
        ref: ref,
        extra: extra
    };
    return {
        type: action.OBSERVABLE_REGISTER,
        payload: {}[name] = {
            ...getObservableStatus(name),
            ...extra
        }
    };
};

export const removeObservable = name => {
    return dispatch => {
        delete Observables[name];
        if (Object.keys(Observables).length === 0) {
            dispatch(stop());
        }
        return {
            type: action.OBSERVABLE_REMOVE,
            payload: name
        };
    };
};

export const registerObservable = (name, ref, extra = {}) => {
    return dispatch => {
        if (ObserverScroll === false || ObserverResize === false) {
            dispatch(observe());
        }
        dispatch(register(name, ref, extra));
    };
};
