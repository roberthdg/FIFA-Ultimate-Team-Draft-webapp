const chemistryReducer = (state = 0, action) => {
    switch(action.type) {
        case 'PLAYER_ADDED':
            return state+=6
        
        case 'PLAYER_MOVED':
            return state+=3

        default:
            return state
    }
}

export default chemistryReducer