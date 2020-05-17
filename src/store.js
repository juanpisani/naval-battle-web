import {applyMiddleware, combineReducers, createStore} from 'redux';

import sessionReducer from "./session/session.reducer";
import sessionMiddleware from "./session/session.middleware";

const appReducer = combineReducers({
  session: sessionReducer,
});

let middleware = [
    sessionMiddleware,
]

const store = createStore(
    appReducer,
    applyMiddleware(...middleware),
);

export default store;