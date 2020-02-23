import { combineReducers } from 'redux'

const startReducer = (state = false, action) => {
    switch(action.type) {
        case 'START_DRAFT':
            return true
        
        default:
            return state
    }
}

const formationReducer = (state = [], action) => {
    switch(action.type) {
        case 'START_DRAFT':
            state=[...action.payload]
            return state
        
        case 'UPDATE_PLAYER':
            state[action.payload.index].player= {...action.payload.player}
            calculateChemistry(state, action.payload.index)  
            updateChemistry(state)
            return [...state]

        default:
            return state
    }
}

const modalReducer = (state=false, action) => {
    switch(action.type) {
        case 'OPEN_MODAL':
            return true

        case 'CLOSE_MODAL':
            return false
        
        default:
            return state
    }
}

const rootReducer = combineReducers({
    hasStarted: startReducer,
    isModalOpen: modalReducer,
    formation: formationReducer
})

export default (state, action) => (
    action.type === 'RESET_DRAFT'
        ? rootReducer({}, {})
        : rootReducer(state, action)
)

function calculateChemistry(formation, playerIndex) {

    formation[playerIndex].links.forEach(link => {
        let secondPlayerIndex = formation.findIndex(player => player.fieldPosition === link.position);

        let player1 = formation[playerIndex].player
        let player2 = formation[secondPlayerIndex].player
        if(player2.position==null) return null

        let linkChemistry = 0
        linkChemistry+= player1.nation===player2.nation? 1 : 0
        linkChemistry+= player1.league===player2.league? 1 : 0
        linkChemistry+= player1.club===player2.club? 1 : 0

        //set chemistry of added player
        link.chemistry = linkChemistry
 
        //update chemistry of linked players
        let linkIndex=formation[secondPlayerIndex].links.findIndex(link => link.position === formation[playerIndex].fieldPosition)
        formation[secondPlayerIndex].links[linkIndex].chemistry=linkChemistry
    })

}

function updateChemistry(formation) {

    formation.forEach(player => {
        if(player.player.position==null) return 0

        let baseChemistry = player.player.position===player.fieldPosition? 6 : 3

        let linkChemistry = player.links.reduce((a, b) => a + (b['chemistry'] || 0), 0);

        player.chemistry=baseChemistry+linkChemistry
    })

}


