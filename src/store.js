import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

import sessionReducer from "./session/session.reducer";
import sessionMiddleware from "./session/session.middleware";

const appReducer = combineReducers({
  session: sessionReducer,
});

let middleware = [
    reduxThunk,
    sessionMiddleware,
];

const store = createStore(
    appReducer,
    applyMiddleware(...middleware),
);

export default store;