import {UPDATE_DISPOSITION_SUCCESS} from "./game.actions";
import {RESET_DISPOSITION_SUCCESS} from "./game.actions";

const initialState = [];

const game = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DISPOSITION_SUCCESS:
            return action.positions;
        case RESET_DISPOSITION_SUCCESS:
            return initialState;
        default:
            return state;
    }
};

export default game;

