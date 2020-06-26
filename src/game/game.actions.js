export const UPDATE_DISPOSITION_SUCCESS = "UPDATE_DISPOSITION_SUCCESS";
export const GAME_STARTED = "GAME_STARTED";

export const gameActions = {
    updateDisposition: (positions) => ({type: UPDATE_DISPOSITION_SUCCESS, positions: positions}),
    gameStarted: (ownCells, ownShips, opponentCells) => ({type: GAME_STARTED, ownCells: ownCells,
                                                          ownShips: ownShips, opponentCells: opponentCells})
};
