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

export const openModal = (index) =>{
    return {
        type:"OPEN_MODAL",
        payload: index
    };
};

export const selectPlayer = (index) =>{
    return {
        type:"SELECT_PLAYER",
        index: index
    };
};

export const updatePlayer = (player, index) =>{
    return {
        type:"UPDATE_PLAYER",
        payload: {
            player:player,
            index:index
        }
    };
};


