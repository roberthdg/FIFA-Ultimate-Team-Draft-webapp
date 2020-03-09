
export const startDraftReducer = (state = false, action) => {
    switch(action.type) {
        case 'START_DRAFT':
            return true
        
        default:
            return state
    }
}

export const draftCountReducer = (state = 0, action) => {
    switch(action.type) {
        case 'UPDATE_PLAYER':
            return state=state+1
        
        default:
            return state
    }
}

export const preloaderReducer = (state = false, action) => {
    switch(action.type) {
        case 'IMG_LOADED':
            return true
        
        default:
            return state
    }
}

