export const UPDATE_DISPOSITION_SUCCESS = "UPDATE_DISPOSITION_SUCCESS";
export const GAME_STARTED = "GAME_STARTED";
export const CHANGE_TURN = "CHANGE_TURN";
export const PROCESSING_SHOT = "PROCESSING_SHOT";


export const gameActions = {
    updateDisposition: (positions) => ({type: UPDATE_DISPOSITION_SUCCESS, positions: positions}),
    gameStarted: (ownCells, opponentCells) => ({type: GAME_STARTED, ownCells: ownCells, opponentCells: opponentCells}),
    changeTurn: (isMyTurn) => ({type: CHANGE_TURN, isMyTurn: isMyTurn}),
    processingShot: (processingShot) => ({type: PROCESSING_SHOT, processingShot:processingShot})
};
