const PLAYER_DATA = {
    position: null,
    nation:null,
    league:null,
    club:null,
    rating:0,
    cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
}

//const POSITION_DATA_= {}

const formation442 = [
    { 
        fieldPosition: 'GK',
        player: PLAYER_DATA,
        links: [{positionIndex: 2, chemistryLine: '70', chemistry: null}, 
                {positionIndex: 3, chemistryLine:'110', chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'RB',
        player: PLAYER_DATA,
        links: [{positionIndex: 2, chemistryLine:'180', chemistry: null}, 
                {positionIndex: 5, chemistryLine:'90', chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'RCB',
        player: PLAYER_DATA,
        links: [{positionIndex: 3, chemistryLine:'180', chemistry: null}, 
                {positionIndex: 6, chemistryLine:'90', chemistry: null}, 
                {positionIndex: 0, chemistryLine: null, chemistry: null}, 
                {positionIndex: 1, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'LCB',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: '90', chemistry: null},
                {positionIndex: 4, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 0, chemistryLine: null, chemistry: null}, 
                {positionIndex: 2, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'LB',
        player: PLAYER_DATA,
        links : [{positionIndex: 8, chemistryLine: '90', chemistry: null}, 
                 {positionIndex: 3, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'RM',
        player: PLAYER_DATA,
        links: [{positionIndex: 9, chemistryLine: '135', chemistry: null}, 
                {positionIndex: 6, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 1, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'RCM',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 9, chemistryLine: '90', chemistry: null}, 
                {positionIndex: 2, chemistryLine: null, chemistry: null}, 
                {positionIndex: 5, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LCM',
        player: PLAYER_DATA,
        links: [{positionIndex: 8, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 10, chemistryLine: '90', chemistry: null}, 
                {positionIndex: 6, chemistryLine: null, chemistry: null}, 
                {positionIndex: 3, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LM',
        player: PLAYER_DATA,
        links: [{positionIndex: 10, chemistryLine:'45', chemistry: null}, 
                {positionIndex: 7, chemistryLine: null, chemistry: null}, 
                {positionIndex: 4, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'RST',
        player: PLAYER_DATA,
        links: [{positionIndex: 10, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 5, chemistryLine: null, chemistry: null}, 
                {positionIndex: 6, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LST',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: null, chemistry: null}, 
                {positionIndex: 8, chemistryLine: null, chemistry: null}, 
                {positionIndex: 9, chemistryLine: null, chemistry: null}],
        chemistry: 0
    }    
]

const formation433 = []

const formation343 = []
    
const formationData = [formation442, formation433, formation343]

export default formationData



