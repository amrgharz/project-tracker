import AuthReducer from './AuthReducers'
import ProjectReducer from './ProjectReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer
})

export default rootReducer;