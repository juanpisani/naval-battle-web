import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

import sessionReducer from "./session/session.reducer";
import sessionMiddleware from "./session/session.middleware";
import gameReducer from "./game/game.reducer";
import gameMiddleware from "./game/game.middleware";

const appReducer = combineReducers({
    session: sessionReducer,
    game:   gameReducer,
});

let middleware = [
    reduxThunk,
    sessionMiddleware,
    gameMiddleware
];

const store = createStore(
    appReducer,
    applyMiddleware(...middleware),
);

export default store;