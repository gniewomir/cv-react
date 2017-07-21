import { combineReducers } from 'redux';
import SkillReducer from './skill';
import ObservableReducer from './observable';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    router: routerReducer,
    SkillReducer,
    ObservableReducer
});

export default rootReducer;
