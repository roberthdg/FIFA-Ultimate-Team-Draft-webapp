import { combineReducers } from 'redux'
import { startDraftReducer, draftCountReducer } from './draft'
import { playerReducer, modalReducer } from './player'
import { formationReducer, formationIndexReducer } from './formation'

const rootReducer = combineReducers({
    draftStarted: startDraftReducer,
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
