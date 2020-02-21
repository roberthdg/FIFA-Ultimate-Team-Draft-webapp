export const startDraft = () =>{
    return {
        type:"START_DRAFT"
    };
};

export const resetDraft = () =>{
    return {
        type:"RESET_DRAFT"
    };
};

export const addChemistry = (chem) =>{
    return {
        type:"PLAYER_ADDED",
        payload: chem
    };
};