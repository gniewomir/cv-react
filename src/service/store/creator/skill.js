import * as action from '../action/skill';
import data from '../../../data/db.json';

const requestSkills = () => {
    return {
        type: action.SKILL_REQUEST
    };
};

const errorSkills = error => {
    return {
        type: action.SKILL_ERROR,
        error: error
    };
};

const recievedSkills = skills => {
    return {
        type: action.SKILL_RECEIVED,
        payload: skills
    };
};

const filterSkills = query => {
    return {
        type: action.SKILL_FILTER,
        query: query
    };
};

export const fetchSkills = () => {
    return dispatch => {
        dispatch(requestSkills());
        if (data.skills) {
            dispatch(recievedSkills(data.skills));
        } else {
            dispatch(errorSkills(data));
        }
    };
};

export const searchSkills = query => {
    return dispatch => {
        dispatch(fetchSkills());
        dispatch(filterSkills(query));
    };
};
