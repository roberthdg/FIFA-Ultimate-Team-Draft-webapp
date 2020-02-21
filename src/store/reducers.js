import { combineReducers } from 'redux'

const chemistry = (state = 0, action) => {
    switch(action.type) {
        case 'PLAYER_ADDED':
            return state+=action.payload
        
        case 'PLAYER_MOVED':
            return state+=3

        default:
            return state
    }
}

const rating = (state = false, action) => {
    switch(action.type) {
        case 'PLAYER_ADDED':
            return !state
        
        case 'PLAYER_MOVED':
            return !state

        default:
            return state
    }
}


const start = (state = false, action) => {
    switch(action.type) {
        case 'START_DRAFT':
            return true
        
        case 'RESET_DRAFT':
            return false

        default:
            return state
    }
}

const rootReducer = combineReducers({
    chemistry: chemistry,
    rating: rating,
    hasStarted: start
})

export default rootReducer
