import {BOARD_SENT, GAME_STARTED, UPDATE_DISPOSITION_SUCCESS, RESET_DISPOSITION_SUCCESS} from "./game.actions";

const initialState = {
    hasSent: false,
    boardsReady: false,
    ownBoard: {},
    opponentBoard: {},
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DISPOSITION_SUCCESS:
            return action.positions;
        case RESET_DISPOSITION_SUCCESS:
            return initialState;
        case BOARD_SENT:
            return {
                ...state,
                hasSent: true
            };
        case GAME_STARTED:
            return {
                ...state,
                boardsReady: true,
                ownBoard: action.ownBoard,
                opponentBoard: action.opponentBoard,
            };
        default:
            return state;
    }
};

export default game;

