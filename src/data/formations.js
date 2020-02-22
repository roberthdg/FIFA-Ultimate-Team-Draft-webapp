const formation442 = [
    { 
        player:{
            position: 'GK',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'RCB', chemistryLine: '70', chemistry: null}, 
                {position:'LCB', chemistryLine:'110', chemistry: null}],
    },
    { 
        player:{
            position: 'RB',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'RCB', chemistryLine:'180', chemistry: null}, 
                {position:'RM', chemistryLine:'90', chemistry: null}]
    },
    { 
        player:{
            position: 'RCB',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LCB', chemistryLine:'180', chemistry: null}, 
                {position:'RCM', chemistryLine:'90', chemistry: null}, 
                {position:'RB', chemistryLine: null, chemistry: null}, 
                {position:'GK', chemistryLine: null, chemistry: null}]
    },
    { 
        player:{
            position: 'LCB',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LCM', chemistryLine: '90', chemistry: null},
                {position:'LB', chemistryLine: '180', chemistry: null}, 
                {position:'GK', chemistryLine: null, chemistry: null}, 
                {position:'RCB', chemistryLine: null, chemistry: null}]
    },
    { 
        player:{
            position: 'LB',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links : [{position:'LM', chemistryLine:'90', chemistry: null}, 
                 {position:'LCB', chemistryLine: null, chemistry: null}]
    },
    { 
        player:{
            position: 'RM',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'RST', chemistryLine: '135', chemistry: null}, 
                {position:'RCM', chemistryLine: '180', chemistry: null}, 
                {position:'RB', chemistryLine: null, chemistry: null}]
    },
    { 
        player:{
            position: 'RCM',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LCM', chemistryLine: '180', chemistry: null}, 
                {position:'RST', chemistryLine: '90', chemistry: null}, 
                {position:'RCB', chemistryLine: null, chemistry: null}, 
                {position:'RM', chemistryLine: null, chemistry: null}]
    },
    { 
        player:{
            position: 'LCM',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LM', chemistryLine: '180', chemistry: null}, 
                {position:'LST', chemistryLine: '90', chemistry: null}, 
                {position:'RCM', chemistryLine: null, chemistry: null}, 
                {position:'LCB', chemistryLine: null, chemistry: null}]
    },
    { 
        player:{
            position: 'LM',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LST', chemistryLine:'45', chemistry: null}, 
                {position:'LCM', chemistryLine: null, chemistry: null}, 
                {position:'LB', chemistryLine: null, chemistry: null}]
    },
    { 
        player:{
            position: 'RST',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LST', chemistryLine: '180', chemistry: null}, 
                {position:'RM', chemistryLine: null, chemistry: null}, 
                {position:'RCM', chemistryLine: null, chemistry: null}]
    },
    { 
        player:{
            position: 'LST',
            nation:null,
            league:null,
            club:null,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LM', chemistryLine: null, chemistry: null}, 
                {position:'LCM', chemistryLine: null, chemistry: null}, 
                {position:'RST', chemistryLine: null, chemistry: null}]
    }    
]

const formation433 = []

const formation343 = []
    
const formations = [formation442, formation433, formation343]

exports.formations = formations



