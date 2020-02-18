
const formation = [
                //4-4-2
                {'gk': 0, 'rb': 1, 'rcb':2, 'lcb':3, 'lb':4, 'rm':5, 'rcm':6, 'lcm':7, 'lm':8, 'rst':9, 'lst':10}, 
                //4-3-3
                {'gk':0, 'rb': 1, 'rcb':2, 'lcb':3, 'lb':4, 'rcm':5, 'cam':6, 'lcm':7, 'rw':8, 'st':9, 'lw':10}
            ]


const formation442 = [
    { 
        'position': 'GK',
        'links' : ['RCB', 'LCB'],
        'chemistryLines' : [{'RCB': []}, {'LCB': []}]
    },
    //Defenders
    { 
        'position': 'RB',
        'links' : ['RCB', 'RM'],
        'chemistryLines' : [{'RCB': []}, {'RM': []}]
    },
    { 
        'position': 'RCB',
        'links' : ['GK', 'LCB', 'RCM', 'RB'],
        'chemistryLines' : [{'RCM': []}, {'LCB': []}]
    },
    { 
        'position': 'LCB',
        'links' : ['GK', 'RCB', 'LCM', 'LB'],
        'chemistryLines' : [{'LCM': []}, {'LB': []}]
    },
    { 
        'position': 'LB',
        'links' : ['LCB', 'LM'],
        'chemistryLines' : [{'LM': []}]
    },
    //Midfielders
    { 
        'position': 'RM',
        'links' : ['RST', 'RCM', 'RB'],
        'chemistryLines' : [{'RCM': []}, {'RST': []}]
    },
    { 
        'position': 'RCM',
        'links' : ['RCB', 'RM', 'LCM', 'RST'],
        'chemistryLines' : [{'LCM': []}, {'RST': []}]
    },
    { 
        'position': 'LCM',
        'links' : ['LCB', 'LM', 'RCM', 'LST'],
        'chemistryLines' : [{'LM': []}, {'LST': []}]
    },
    { 
        'position': 'LM',
        'links' : ['LST', 'LC', 'LB'],
        'chemistryLines' : [{'LST': []}]
    },
    // Forwards
    { 
        'position': 'RST',
        'links' : ['RM', 'RCM', 'LST'],
        'chemistryLines' : [{'LST': []}]
    },
    { 
        'position': 'LST',
        'links' : ['LM', 'LCM', 'RST'],
        'chemistryLines' : []
    }    
]
    



const formationLinks = [
                [          //4-4-2
                    [0,0,1,1,0,0,0,0,0,0,0],
                    [0,0,1,0,0,1,0,0,0,0,0],
                    [1,0,1,0,0,0,1,0,0,0,0],
                    [1,0,0,1,0,0,0,1,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0]
                ],

                [           //4-3-3
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0]
                ]
            ]

exports.formation = formation

exports.formationLinks = formationLinks


