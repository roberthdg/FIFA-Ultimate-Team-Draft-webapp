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

export const openModal = () =>{
    return {
        type:"OPEN_MODAL",
    };
};

export const closeModal = () =>{
    return {
        type:"CLOSE_MODAL",
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


