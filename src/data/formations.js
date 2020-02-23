const formation442 = [
    { 
        fieldPosition: 'GK',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'RCB', chemistryLine: '70', chemistry: null}, 
                {position:'LCB', chemistryLine:'110', chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'RB',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'RCB', chemistryLine:'180', chemistry: null}, 
                {position:'RM', chemistryLine:'90', chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'RCB',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LCB', chemistryLine:'180', chemistry: null}, 
                {position:'RCM', chemistryLine:'90', chemistry: null}, 
                {position:'RB', chemistryLine: null, chemistry: null}, 
                {position:'GK', chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    {   
        fieldPosition: 'LCB',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LCM', chemistryLine: '90', chemistry: null},
                {position:'LB', chemistryLine: '180', chemistry: null}, 
                {position:'GK', chemistryLine: null, chemistry: null}, 
                {position:'RCB', chemistryLine: null, chemistry: null}]
    },
    {   
        fieldPosition: 'LB',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links : [{position:'LM', chemistryLine:'90', chemistry: null}, 
                 {position:'LCB', chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'RM',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'RST', chemistryLine: '135', chemistry: null}, 
                {position:'RCM', chemistryLine: '180', chemistry: null}, 
                {position:'RB', chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'RCM',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LCM', chemistryLine: '180', chemistry: null}, 
                {position:'RST', chemistryLine: '90', chemistry: null}, 
                {position:'RCB', chemistryLine: null, chemistry: null}, 
                {position:'RM', chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LCM',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LM', chemistryLine: '180', chemistry: null}, 
                {position:'LST', chemistryLine: '90', chemistry: null}, 
                {position:'RCM', chemistryLine: null, chemistry: null}, 
                {position:'LCB', chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LM',
        player: { 
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LST', chemistryLine:'45', chemistry: null}, 
                {position:'LCM', chemistryLine: null, chemistry: null}, 
                {position:'LB', chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'RST',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LST', chemistryLine: '180', chemistry: null}, 
                {position:'RM', chemistryLine: null, chemistry: null}, 
                {position:'RCM', chemistryLine: null, chemistry: null}],
        chemistry: 0
    },
    { 
        fieldPosition: 'LST',
        player: {
            position: null,
            nation:null,
            league:null,
            club:null,
            rating:0,
            cardImage: process.env.PUBLIC_URL + '/img/select_player_card.png'
        },
        links: [{position:'LM', chemistryLine: null, chemistry: null}, 
                {position:'LCM', chemistryLine: null, chemistry: null}, 
                {position:'RST', chemistryLine: null, chemistry: null}],
        chemistry: 0
    }    
]

const formation433 = []

const formation343 = []
    
const formationData = [formation442, formation433, formation343]

export default formationData



