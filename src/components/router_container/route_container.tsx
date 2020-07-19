import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "../static/home/home";

const RouteContainer = () => {
    return (
        <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route path='*'>
                <Redirect to = '/' />
            </Route>
        </Switch>
    )
}

export default RouteContainer;