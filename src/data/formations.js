const formation442 = [
    { 
        position: 'GK',
        links: [{position:'RCB', chemistryLine: '70'}, 
                {position:'LCB', chemistryLine:'110'}],
    },
    { 
        position : 'RB',
        links: [{position:'RCB', chemistryLine:'180'}, 
                {position:'RM', chemistryLine:'90'}]
    },
    { 
        position: 'RCB',
        links: [{position:'LCB', chemistryLine:'180'}, 
                {position:'RCM', chemistryLine:'90'}, 
                {position:'RB', chemistryLine: null}, 
                {position:'GK', chemistryLine: null}]
    },
    { 
        position: 'LCB',
        links: [{position:'LCM', chemistryLine: '90'},
                {position:'LB', chemistryLine: '180'}, 
                {position:'GK', chemistryLine: null}, 
                {position:'RCB', chemistryLine: null}]
    },
    { 
        position : 'LB',
        links : [{position:'LM', chemistryLine:'90'}, 
                 {position:'LCB', chemistryLine: null}]
    },
    { 
        position: 'RM',
        links: [{position:'RST', chemistryLine: '135'}, 
                {position:'RCM', chemistryLine: '180'}, 
                {position:'RB', chemistryLine: null}]
    },
    { 
        position: 'RCM',
        links: [{position:'LCM', chemistryLine: '180'}, 
                {position:'RST', chemistryLine: '90'}, 
                {position:'RCB', chemistryLine: null}, 
                {position:'RM', chemistryLine: null}]
    },
    { 
        position: 'LCM',
        links: [{position:'LM', chemistryLine: '180'}, 
                {position:'LST', chemistryLine: '90'}, 
                {position:'RCM', chemistryLine: null}, 
                {position:'LCB', chemistryLine: null}]
    },
    { 
        position: 'LM',
        links: [{position:'LST', chemistryLine:'45'}, 
                {position:'LCM', chemistryLine: null}, 
                {position:'LB', chemistryLine: null}]
    },
    { 
        position: 'RST',
        links: [{position:'LST', chemistryLine: '180'}, 
                {position:'RM', chemistryLine: null}, 
                {position:'RCM', chemistryLine: null}]
    },
    { 
        position: 'LST',
        links: [{position:'LM', chemistryLine: null}, 
                {position:'LCM', chemistryLine: null}, 
                {position:'RST', chemistryLine: null}]
    }    
]

const formation433 = []

const formation343 = []
    
const formations = [formation442, formation433, formation343]

exports.formations = formations



