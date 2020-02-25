export const startDraft = (formation, formationIndex) =>{
    return {
        type:"START_DRAFT",
        payload: formation,
        index: formationIndex
    };
};

export const resetDraft = () =>{
    return {
        type:"RESET_DRAFT"
    };
};

export const openModal = (playerIndex) =>{
    return {
        type:"OPEN_MODAL",
        payload: playerIndex
    };
};

export const selectPlayer = (playerIndex) =>{
    return {
        type:"SELECT_PLAYER",
        index: playerIndex
    };
};

export const swapPlayer = (draggedPlayer, targetPlayer) =>{
    return {
        type:"SWAP_PLAYER",
        payload: {
            firstPlayer: draggedPlayer,
            secondPlayer: targetPlayer 
        }
    };
};

export const updatePlayer = (player, playerIndex) =>{
    return {
        type:"UPDATE_PLAYER",
        payload: {
            player:player,
            index:playerIndex
        }
    };
};


