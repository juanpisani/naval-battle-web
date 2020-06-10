import WebSocketInstance from "../socket/socket";
import {gameActions, SEND_BOARD,} from "./game.actions";


const gameMiddleware = ({ dispatch, getState }) => next => {
    return action => {
        next(action);
        switch (action.type) {
            case SEND_BOARD:
                WebSocketInstance.sendBoard(action.roomId, action.board, action.userId);
                dispatch(gameActions.boardSent());
                break;
            default:
            // break;
        }
    };
};

export default gameMiddleware;