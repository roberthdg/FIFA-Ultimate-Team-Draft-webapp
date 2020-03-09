export const startDraft = (formation, formationIndex, formationName) =>{
    return {
        type:"START_DRAFT",
        payload: formation,
        index: formationIndex,
        name: formationName
    };
};

export const resetDraft = () =>{
    return {
        type:"RESET_DRAFT"
    };
};

export const changeName = (formationName) =>{
    return {
        type:"CHANGE_NAME",
        name: formationName
    };
};

export const openModal = (modalType, playerIndex) =>{
    return {
        type:"OPEN_MODAL",
        payload: {
            modalType: modalType,
            selectedPlayer:playerIndex
        }
    };
};

export const populateModal = (players) =>{
    return {
        type: "POPULATE_MODAL",
        playersData: players
    };
};

export const hideModal = () =>{
    return {
        type:"HIDE_MODAL",
    };
};

export const showModal = () =>{
    return {
        type:"SHOW_MODAL",
    };
};

export const closeModal = () =>{
    return {
        type:"CLOSE_MODAL",
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

export const showSquad = (squadData, formationData) =>{
    return {
        type:"SHOW_SQUAD",
        squad: squadData,
        formation: formationData
    };
};

export const imgLoaded = () =>{
    return {
        type:"IMG_LOADED"
    };
};




