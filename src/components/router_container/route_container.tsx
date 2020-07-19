import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "../static/home/home";
import styles from './route_container.module.scss';

const RouteContainer = () => {
    return (
        <div className={styles.mainContainer}>
            <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route path='*'>
                <Redirect to = '/' />
            </Route>
        </Switch>
        </div>
    )
}

export default RouteContainer;