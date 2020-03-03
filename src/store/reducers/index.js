import { combineReducers } from 'redux'
import { startDraftReducer, draftCountReducer, preloaderReducer } from './draft'
import { selectedPlayerReducer } from './player'
import { modalReducer, modalPlayersReducer } from './modal'
import { formationReducer, formationIndexReducer } from './formation'

const rootReducer = combineReducers({
    draftStarted: startDraftReducer,
    isLoaded: preloaderReducer,
    draftCount: draftCountReducer,
    modalIsOpen: modalReducer,
    selectedPlayer: selectedPlayerReducer,
    draftedPlayers: modalPlayersReducer,
    formationIndex: formationIndexReducer,
    formation: formationReducer,
})

export default (state, action) => (
    action.type === 'RESET_DRAFT'
        ? rootReducer({}, {})
        : rootReducer(state, action)
)
