import { combineReducers } from 'redux'
import { startDraftReducer, draftCountReducer, preloaderReducer } from './draft'
import { playerReducer, modalReducer } from './player'
import { formationReducer, formationIndexReducer } from './formation'

const rootReducer = combineReducers({
    draftStarted: startDraftReducer,
    isLoaded: preloaderReducer,
    draftCount: draftCountReducer,
    modalIsOpen: modalReducer,
    selectedPlayer: playerReducer,
    formationIndex: formationIndexReducer,
    formation: formationReducer,
})

export default (state, action) => (
    action.type === 'RESET_DRAFT'
        ? rootReducer({}, {})
        : rootReducer(state, action)
)
