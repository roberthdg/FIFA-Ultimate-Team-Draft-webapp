const ratingReducer = (state = false, action) => {
    switch(action.type) {
        case 'PLAYER_ADDED':
            return !state
        
        case 'PLAYER_MOVED':
            return !state

        default:
            return state
    }
}

export default ratingReducer