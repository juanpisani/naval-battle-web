export const UPDATE_DISPOSITION_SUCCESS = "UPDATE_DISPOSITION_SUCCESS";
export const RESET_DISPOSITION_SUCCESS = "RESET_DISPOSITION_SUCCESS";
export const SEND_BOARD = "SEND_BOARD";
export const GAME_STARTED = "GAME_STARTED";


export const gameActions = {
    updateDisposition: (positions) => ({type: UPDATE_DISPOSITION_SUCCESS, positions: positions}),
    resetDisposition: () => ({type: RESET_DISPOSITION_SUCCESS}),
    sendBoard: (roomId, board, userId) => ({type: SEND_BOARD, roomId:roomId, board:board, userId:userId}),
    gameStarted: (ownBoard, opponentBoard) => ({type: GAME_STARTED, ownBoard: ownBoard, opponentBoard:opponentBoard})
};
