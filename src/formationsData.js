const formation442 = [
    { 
        'position': 'GK',
        'links' : [{'RCB': '70'}, {'LCB': '110'}],
    },
    { 
        'position': 'RB',
        'links' : [{'RCB':'180'}, {'RM':'90'}]
    },
    { 
        'position': 'RCB',
        'links' : [{'GK': null}, {'LCB':'180'}, {'RCM':'90'}, {'RB': null}]
    },
    { 
        'position': 'LCB',
        'links' : [{'GK': null}, {'RCB': null}, {'LCM': '90'}, {'LB': '180'}]
    },
    { 
        'position': 'LB',
        'links' : [{'LCB': null}, {'LM':'90'}]
    },
    { 
        'position': 'RM',
        'links' : [{'RST': '135'}, {'RCM': '180'}, {'RB': null}]
    },
    { 
        'position': 'RCM',
        'links' : [{'RCB': null}, {'RM': null}, {'LCM': '180'}, {'RST': '90'}]
    },
    { 
        'position': 'LCM',
        'links' : [{'LCB': null}, {'LM': '180'}, {'RCM': null}, {'LST': '90'}],
    },
    { 
        'position': 'LM',
        'links' : [{'LST':'45'}, {'LCM': null}, {'LB': null}]
    },
    { 
        'position': 'RST',
        'links' : [{'RM': null}, {'RCM': null}, {'LST': '180'}]
    },
    { 
        'position': 'LST',
        'links' : [{'LM': null}, {'LCM': null}, {'RST': null}],
    }    
]

const formation433 = []

const formation343 = []
    
const formations = [formation442, formation433, formation343]

exports.formations = formations



