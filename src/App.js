import React from 'react';
import Login from "./session/containers/Login";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from "./session/containers/Home";
import GameLobby from "./session/containers/GameLobby";
import Setup from "./game/containers/Setup";
import Game from "./game/containers/Game";

function App() {
  return (
      <>
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/gameLobby' component={GameLobby}/>
                    <Route exact path='/setPieces' component={Setup}/>
                    <Route exact path='/game' component={Game}/>
                </Switch>
            </Router>
        </div>
      </>
  );
}

export default App;
