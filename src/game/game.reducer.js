import {CHANGE_TURN, GAME_STARTED, PROCESSING_SHOT, UPDATE_CELLS, UPDATE_DISPOSITION_SUCCESS} from "./game.actions";

const initialState = {
    ownCells: {},
    opponentCells: {},
    isMyTurn: false,
    x: 0,
    y: 0,
    isProcessingShot: false,
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DISPOSITION_SUCCESS:
            return action.positions;
        case GAME_STARTED:
        case UPDATE_CELLS:
            return {
                ...state,
                ownCells: action.ownCells,
                opponentCells: action.opponentCells,
            };
        case CHANGE_TURN:
            return {
                ...state,
                isMyTurn: action.isMyTurn
            };
        case PROCESSING_SHOT:
            return {
                ...state,
                isProcessingShot: action.processingShot
            };
        default:
            return state;
    }
};

export default game;

