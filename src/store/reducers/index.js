import { combineReducers } from 'redux'
import formationData from './formation'

const rootReducer = combineReducers({
    formation: formationData
})

export default rootReducer
