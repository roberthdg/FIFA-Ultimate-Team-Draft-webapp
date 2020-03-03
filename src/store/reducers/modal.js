export const modalReducer = (state=false, action) => {
    switch(action.type) {
        case 'OPEN_MODAL':
            return true

        case 'UPDATE_PLAYER':
            return false

        case 'SWAP_PLAYER':
                return false

        case 'SELECT_PLAYER':
            return false
        
        default:
            return state
    }
}

export const modalPlayersReducer = (state=null, action) => {

    switch(action.type) {
        case 'POPULATE_MODAL':
            return [...action.playersData]

        case 'UPDATE_PLAYER':
            return null

        case 'SWAP_PLAYER':
                return null

        default:
            return state
    }
}