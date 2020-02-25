import { combineReducers } from 'redux'
import { roleData } from './../data/positions'

const startDraftReducer = (state = false, action) => {
    switch(action.type) {
        case 'START_DRAFT':
            return true
        
        default:
            return state
    }
}

const formationIndexReducer = (state=null, action) => {
    switch(action.type) {
        case 'START_DRAFT':
            return action.index 
        
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
        
        case 'SWAP_PLAYER':
            let firstPlayer = state[action.payload.firstPlayer].player
            let secondPlayer = state[action.payload.secondPlayer].player

            state[action.payload.firstPlayer].player = {...secondPlayer}
            state[action.payload.secondPlayer].player = {...firstPlayer}

            calculateChemistry(state, action.payload.firstPlayer) 
            calculateChemistry(state, action.payload.secondPlayer) 
            updateChemistry(state)

            return [...state]

        default:
            return state
    }
}

const playerReducer = (state=null, action) => {
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

const modalReducer = (state=false, action) => {
    switch(action.type) {
        case 'OPEN_MODAL':
            return true

        case 'UPDATE_PLAYER':
            return false
        
        default:
            return state
    }
}

const draftCountReducer = (state = 0, action) => {
    switch(action.type) {
        case 'UPDATE_PLAYER':
            return state=state+1
        
        default:
            return state
    }
}


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

function calculateChemistry(formation, playerIndex) {

    formation[playerIndex].links.forEach(link => {

        let secondPlayerIndex = link.positionIndex
        let player1 = formation[playerIndex].player
        let player2 = formation[secondPlayerIndex].player
        
        if(player2.position==null) return null

        //compare players to calculate chemistry
        let linkChemistry = 0
        linkChemistry+= player1.nation===player2.nation? 1 : 0
        linkChemistry+= player1.league===player2.league? 1 : 0
        linkChemistry+= player1.club===player2.club? 1 : 0

        //set chemistry of added player
        link.chemistry = linkChemistry
 
        //update chemistry of linked player
        let linkIndex=formation[secondPlayerIndex].links
            .findIndex(link => link.positionIndex === playerIndex)
        formation[secondPlayerIndex].links[linkIndex].chemistry=linkChemistry
    })

}

function getRole(data, position) {
    return Object.keys(data).find(key => data[key].includes(position));
}

function updateChemistry(formation) {

    formation.forEach(player => {
        if(player.player.position==null) return 0

        //calculate base chemistry
        let baseChemistry

        if(player.player.position===player.fieldPosition) baseChemistry = 6

        else if(getRole(roleData, player.player.position)===getRole(roleData, player.fieldPosition)) baseChemistry = 3

        else baseChemistry = 0

        //calculate extra chemistry
        let totalLinks=player.links.length*2
        let totalLinksChemistry = player.links.reduce((a, b) => a + (b['chemistry'] || 0), 0);
        let linkChemistry
        
        if(totalLinksChemistry<totalLinks/4) linkChemistry = 0

        else if(totalLinksChemistry<=totalLinks/2) linkChemistry = 1

        else if(totalLinksChemistry<=totalLinks) linkChemistry= baseChemistry===0 ? 1 : 3

        else linkChemistry= baseChemistry===0 ? 2 : 4

        player.chemistry=baseChemistry+linkChemistry
    })

}


