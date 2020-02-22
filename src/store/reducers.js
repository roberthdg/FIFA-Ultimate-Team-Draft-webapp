import { combineReducers } from 'redux'

const chemistry = (state = 0, action) => {
    switch(action.type) {
        case 'PLAYER_ADDED':
            return state+=action.payload
        
        case 'PLAYER_UPDATED':
            return state+=3

        case 'RESET_DRAFT':
            return state=0
        
            default:
            return state
    }
}

const rating = (state = false, action) => {
    switch(action.type) {
        case 'PLAYER_ADDED':
            return !state
        
        case 'PLAYER_UPDATED':
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

const formation = (state = [], action) => {
    switch(action.type) {
        case 'START_DRAFT':
            return state=[...action.payload]
        
        case 'RESET_DRAFT':
            return state=[]
        
        case 'RIP': 
            state[0].links[0].chemistry=2
            state[0].links[1].chemistry=2
            return [...state]

        default:
            return state
    }
}

const rootReducer = combineReducers({
    chemistry: chemistry,
    rating: rating,
    hasStarted: start,
    formation: formation
})

export default rootReducer
