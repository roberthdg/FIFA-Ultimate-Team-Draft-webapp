export const selectedPlayerReducer = (state=null, action) => {

    switch(action.type) {
        case 'OPEN_MODAL':
            return action.payload

        case 'SELECT_PLAYER':
            return action.index
            
        case 'UPDATE_PLAYER':
            return null

        default:
            return state
    }
}

