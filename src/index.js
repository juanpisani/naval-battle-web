import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import {sessionActions} from "./session/session.actions";
import {gameActions} from "./game/game.actions";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


export default {
    session         : sessionActions,
    game            : gameActions,
}
