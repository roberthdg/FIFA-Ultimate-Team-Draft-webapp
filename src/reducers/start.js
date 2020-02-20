const startState = (state = false, action) => {
    switch(action.type) {
        case 'START_DRAFT':
            return true
        
        case 'RESET_DRAFT':
            return false

        default:
            return state
    }
}

export default startState