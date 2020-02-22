export const startDraft = (formation) =>{
    return {
        type:"START_DRAFT",
        payload: formation
    };
};

export const resetDraft = () =>{
    return {
        type:"RESET_DRAFT"
    };
};

export const updatePlayer = (chem) =>{
    return {
        type:"PLAYER_UPDATED",
        payload: chem
    };
};

export const updateFormation = () =>{
    return {
        type:"RIP",
        payload: { 
            position : 'GK',
            chemistry: 2
        }
    };
};