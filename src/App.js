import React from 'react';
import Login from "./session/containers/Login";
import {PrivateRoute} from "./PrivateRoute";
import Home from "./session/containers/Home";
import GameLobby from "./session/containers/GameLobby";
import Setup from "./game/containers/Setup";
import Game from "./game/containers/Game";
import Result from "./game/containers/Result";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
      <>
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <PrivateRoute exact path='/home' component={Home}/>
                    <PrivateRoute exact path='/gameLobby' component={GameLobby}/>
                    <PrivateRoute exact path='/setPieces' component={Setup}/>
                    <PrivateRoute exact path='/game' component={Game}/>
                    <Route exact path='/results' component={Result}/>
                </Switch>
            </Router>
        </div>
      </>
  );
}

export default App;
