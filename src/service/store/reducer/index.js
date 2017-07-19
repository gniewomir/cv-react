import { combineReducers } from 'redux';
import SkillReducer from './skill';
import ObservableReducer from './observable';

const rootReducer = combineReducers({
    SkillReducer,
    ObservableReducer
});

export default rootReducer;