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

export const swapPlayer = (selectedPlayer, targetPlayer) =>{
    return {
        type:"SWAP_PLAYER",
        payload: {
            firstPlayer: selectedPlayer,
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


export const imgLoaded = () =>{
    return {
        type:"IS_LOADED"
    };
};



