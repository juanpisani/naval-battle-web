import {GAME_STARTED, UPDATE_DISPOSITION_SUCCESS} from "./game.actions";

const initialState = {
    ownCells: {},
    ownShips: {},
    opponentCells: {},
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DISPOSITION_SUCCESS:
            return action.positions;
        case GAME_STARTED:
            return {
                ...state,
                ownCells: action.ownCells,
                ownShips: action.ownShips,
                opponentCells: action.opponentCells,
            };
        default:
            return state;
    }
};

export default game;

