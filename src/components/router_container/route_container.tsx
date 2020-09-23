import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "../static/home/home";
import Character from "../character/character";

const RouteContainer = () => {
    return (
        <div>
            <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route exact path = '/characters/:id'>
                <Character />
            </Route>
            <Route path='*'>
                <Redirect to = '/' />
            </Route>
        </Switch>
        </div>
    )
}

export default RouteContainer;