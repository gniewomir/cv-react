import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import SkillReducer from '../../component/SkillTable/reducer';
import ObservableReducer from '../../component/Observable/reducer';
import AuthReducer from '../../component/Auth/reducer';


const rootReducer = combineReducers({
    router: routerReducer,
    auth: AuthReducer,
    skills: SkillReducer,
    observables: ObservableReducer
});

export default rootReducer;
