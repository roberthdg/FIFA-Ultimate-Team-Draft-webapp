const initialState = {
    open: false,
    hidden: false,
    type: null
}

export const modalReducer = (state=initialState, action) => {
    let newState
    switch(action.type) {
        case 'OPEN_MODAL':
                newState = {...state}
                newState.open=true;
                newState.type=action.payload.modalType;
            return newState

        case 'HIDE_MODAL':
                newState = {...state}
                newState.hidden=true;
            return newState

        case 'SHOW_MODAL':
                newState = {...state}
                newState.hidden=false;
            return newState

        case 'UPDATE_PLAYER':
            return initialState

        case 'SWAP_PLAYER':
            return initialState

        case 'SELECT_PLAYER':
            return initialState

        case 'CLOSE_MODAL':
           return initialState
        
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