import { combineReducers } from 'redux'

const calculateChemistry = (formation, playerIndex) => {

    formation[playerIndex].links.forEach(link => {
        let secondPlayerIndex = formation.findIndex(player => player.fieldPosition === link.position);

        let player1 = formation[playerIndex].player
        let player2 = formation[secondPlayerIndex].player
        if(player2.position==null) return null

        let linkChemistry = 0
        linkChemistry+= player1.nation===player2.nation? 1 : 0
        linkChemistry+= player1.league===player2.league? 1 : 0
        linkChemistry+= player1.club===player2.club? 1 : 0

        //set chemistry of player
        link.chemistry = linkChemistry
 
        //update chemistry of second player
        let linkIndex=formation[secondPlayerIndex].links.findIndex(link => link.position === formation[playerIndex].fieldPosition)
        formation[secondPlayerIndex].links[linkIndex].chemistry=linkChemistry
    })
}

const updateChemistry = (formation) => {
    formation.forEach(player => {
        if(player.player.position==null) return 0

        let baseChemistry = player.player.position===player.fieldPosition? 6 : 3

        let linkChemistry = player.links.reduce((a, b) => a + (b['chemistry'] || 0), 0);

        player.chemistry=baseChemistry+linkChemistry
    })
}

//console.log(`la química del ${state[playerIndex].fieldPosition} con ${state[secondPlayerIndex].fieldPosition} es ${linkChemistry}`)

const start = (state = false, action) => {
    switch(action.type) {
        case 'START_DRAFT':
            return true
        
        default:
            return state
    }
}

const formation = (state = [], action) => {
    switch(action.type) {
        case 'START_DRAFT':
            state=[...action.payload]
            return state
        
        case 'PLAYER_UPDATED':
            state[action.payload.index].player= {...action.payload.player}
            calculateChemistry(state, action.payload.index)  
            updateChemistry(state)
            return [...state]

        default:
            return state
    }
}

const rootReducer = combineReducers({
    hasStarted: start,
    formation: formation
})

export default (state, action) => (
    action.type === 'RESET_DRAFT'
        ? rootReducer({}, {})
        : rootReducer(state, action)
)

