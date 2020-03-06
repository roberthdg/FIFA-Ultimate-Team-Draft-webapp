const PLAYER_DATA = {
    role: null,
    position: null,
    nation:null,
    league:null,
    club:null,
    rating:0,
    cardImage:'/img/select_player_card.png'
}

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
        fieldPosition: 'CB',
        player: PLAYER_DATA,
        links: [{positionIndex: 3, chemistryLine:'180', chemistry: null}, 
                {positionIndex: 6, chemistryLine:'90', chemistry: null}, 
                {positionIndex: 0, chemistryLine: null, chemistry: null}, 
                {positionIndex: 1, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'CB',
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
        fieldPosition: 'CM',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 9, chemistryLine: '90', chemistry: null}, 
                {positionIndex: 2, chemistryLine: null, chemistry: null}, 
                {positionIndex: 5, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'CM',
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
        fieldPosition: 'ST',
        player: PLAYER_DATA,
        links: [{positionIndex: 10, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 5, chemistryLine: null, chemistry: null}, 
                {positionIndex: 6, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'ST',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: null, chemistry: null}, 
                {positionIndex: 8, chemistryLine: null, chemistry: null}, 
                {positionIndex: 9, chemistryLine: null, chemistry: null}],
        chemistry: 0
    }    
]

const formation433 = [
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
                {positionIndex: 5, chemistryLine:'110', chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'CB',
        player: PLAYER_DATA,
        links: [{positionIndex: 3, chemistryLine:'180', chemistry: null}, 
                {positionIndex: 6, chemistryLine:'110', chemistry: null}, 
                {positionIndex: 0, chemistryLine: null, chemistry: null}, 
                {positionIndex: 1, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'CB',
        player: PLAYER_DATA,
        links: [{positionIndex: 6, chemistryLine: '70', chemistry: null},
                {positionIndex: 4, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 0, chemistryLine: null, chemistry: null}, 
                {positionIndex: 2, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'LB',
        player: PLAYER_DATA,
        links : [{positionIndex: 7, chemistryLine: '70', chemistry: null}, 
                 {positionIndex: 3, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'CM',
        player: PLAYER_DATA,
        links: [{positionIndex: 8, chemistryLine: '90', chemistry: null}, 
                {positionIndex: 6, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 1, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'CM',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 9, chemistryLine: '90', chemistry: null}, 
                {positionIndex: 2, chemistryLine: null, chemistry: null}, 
                {positionIndex: 3, chemistryLine: null, chemistry: null},
                {positionIndex: 5, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'CM',
        player: PLAYER_DATA,
        links: [{positionIndex: 10, chemistryLine: '90', chemistry: null}, 
                {positionIndex: 6, chemistryLine: null, chemistry: null}, 
                {positionIndex: 4, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'RW',
        player: PLAYER_DATA,
        links: [{positionIndex: 9, chemistryLine:'180', chemistry: null}, 
                {positionIndex: 5, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'ST',
        player: PLAYER_DATA,
        links: [{positionIndex: 10, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 8, chemistryLine: null, chemistry: null},
                {positionIndex: 6, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LW',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: null, chemistry: null}, 
                {positionIndex: 9, chemistryLine: null, chemistry: null}],
        chemistry: 0
    }    
]


const formation343 = [
    { 
        fieldPosition: 'GK',
        player: PLAYER_DATA,
        links: [{positionIndex: 1, chemistryLine: '45', chemistry: null}, 
                {positionIndex: 2, chemistryLine: '90', chemistry: null}, 
                {positionIndex: 3, chemistryLine: '135', chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'CB',
        player: PLAYER_DATA,
        links: [{positionIndex: 2, chemistryLine:'180', chemistry: null},
                {positionIndex: 0, chemistryLine: null, chemistry: null}, 
                {positionIndex: 4, chemistryLine:'70', chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'CB',
        player: PLAYER_DATA,
        links: [{positionIndex: 3, chemistryLine:'180', chemistry: null}, 
                {positionIndex: 6, chemistryLine:'110', chemistry: null},
                {positionIndex: 5, chemistryLine: '70', chemistry: null},  
                {positionIndex: 0, chemistryLine: null, chemistry: null}, 
                {positionIndex: 1, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'CB',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: '110', chemistry: null}, 
                {positionIndex: 0, chemistryLine: null, chemistry: null}, 
                {positionIndex: 2, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'RM',
        player: PLAYER_DATA,
        links : [{positionIndex: 5, chemistryLine: '180', chemistry: null},
                 {positionIndex: 8, chemistryLine: '110', chemistry: null}, 
                 {positionIndex: 1, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'CM',
        player: PLAYER_DATA,
        links: [{positionIndex: 9, chemistryLine: '110', chemistry: null},
                {positionIndex: 6, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 4, chemistryLine: null, chemistry: null}, 
                {positionIndex: 2, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'CM',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 9, chemistryLine: '70', chemistry: null}, 
                {positionIndex: 2, chemistryLine: null, chemistry: null}, 
                {positionIndex: 5, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LM',
        player: PLAYER_DATA,
        links: [{positionIndex: 10, chemistryLine: '70', chemistry: null}, 
                {positionIndex: 6, chemistryLine: null, chemistry: null}, 
                {positionIndex: 3, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'RW',
        player: PLAYER_DATA,
        links: [{positionIndex: 9, chemistryLine:'180', chemistry: null}, 
                {positionIndex: 4, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'ST',
        player: PLAYER_DATA,
        links: [{positionIndex: 10, chemistryLine: '180', chemistry: null}, 
                {positionIndex: 8, chemistryLine: null, chemistry: null},
                {positionIndex: 5, chemistryLine: null, chemistry: null},
                {positionIndex: 6, chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LW',
        player: PLAYER_DATA,
        links: [{positionIndex: 7, chemistryLine: null, chemistry: null}, 
                {positionIndex: 9, chemistryLine: null, chemistry: null}],
        chemistry: 0
    }    
]

export const roleData = { 
    'attack': ['ST','RW','LW'], 
    'midfield': ['LM','CM','RM','CAM','CDM'], 
    'defense': ['LB','CB','RB'], 
    'goalkeeper': ['GK'] 
}

export const sibblingPositionsData = {
    'RW':'RM',
    'RM':'RW',
    'LW':'LM',
    'LM':'LW',
    'CAM':'CM',
    'CDM':'CM'
}

    
export const formationData = [formation442, formation433, formation343]

export const indexFormationData = [{'4-4-2': [1,5,9]}, {'4-3-3': [1,5,8]}, {'3-4-3': [1,4,8]}] 
