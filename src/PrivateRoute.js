import Route from "react-router-dom/es/Route";
import React from "react";
import {Redirect} from "react-router-dom";
import store from './store';

export function PrivateRoute ({component: Component, ...rest}) {

    return (
        <Route
            {...rest}
            render={(props) => store.getState().session.isLoggedIn === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/'}} />}
        />
    )
}