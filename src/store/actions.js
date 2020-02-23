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

export const updatePlayer = (player, index) =>{
    return {
        type:"PLAYER_UPDATED",
        payload: {
            player:player,
            index:index
        }
    };
};
