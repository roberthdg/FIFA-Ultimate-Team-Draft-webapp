import { combineReducers } from 'redux'
import { startDraftReducer, draftCountReducer, preloaderReducer } from './draft'
import { selectedPlayerReducer } from './player'
import { modalReducer, modalPlayersReducer } from './modal'
import { squadReducer, formationReducer } from './formation'

const rootReducer = combineReducers({
    draftStarted: startDraftReducer,
    isLoaded: preloaderReducer,
    modalState: modalReducer,
    draftCount: draftCountReducer,
    selectedPlayer: selectedPlayerReducer,
    draftedPlayers: modalPlayersReducer,
    formation: formationReducer,
    squad: squadReducer
})

export default (state, action) => (
    action.type === 'RESET_DRAFT'
        ? rootReducer({}, {})
        : rootReducer(state, action)
)
