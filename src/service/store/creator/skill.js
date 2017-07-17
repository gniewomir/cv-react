import * as action from '../action/skill';
import axios from 'axios';

const requestSkills = () => {
    return dispatch => {
        return axios.get('/data/db.json')
            .then(
                (response) => {
                    dispatch(recievedSkills(response.data.skills));
                }
            )
            .catch(
                (error) => {
                    dispatch(errorSkills(error));
                }
            );
    }
}

const errorSkills = (error) => {
    return {
        type: action.SKILL_ERROR,
        error: error
    }
}

const recievedSkills = (skills) => {
    return {
        type: action.SKILL_RECEIVED,
        payload: skills
    }
}

const filterSkills = (query) => {
    return {
        type: action.SKILL_FILTER,
        query: query
    }
}

const searchSkills = (query) => {
    return dispatch => {
        dispatch(filterSkills(query));
        dispatch(requestSkills());
    }
}

export {
    requestSkills,
    searchSkills
}