import React from 'react';
import Login from "./session/containers/Login";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from "./session/containers/Home";

function App() {
  return (
      <>
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} ></Route>
                    <Route path='/home' component={Home} ></Route>
                </Switch>
            </Router>
        </div>
      </>
  );
}

export default App;
