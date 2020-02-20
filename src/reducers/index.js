import chemistryState from './chemistry'
import ratingState from './rating'
import startState from './start'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    chemistry: chemistryState,
    rating: ratingState,
    hasStarted: startState
})

export default rootReducer