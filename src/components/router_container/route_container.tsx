import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "../static/home/home";
import Character from "../character/character";
import UniversalDataPage from "../static/universal_data/universal_data";
import LearningPage from "../static/learning/learning";
import AdminContainer from "../admin/admin";

const RouteContainer = () => {
    return (
        <div className="route-body">
            <Switch>
                <Route exact path = '/'>
                    <Home />
                </Route>
                <Route exact path = '/admin'>
                    <AdminContainer />
                </Route>
                <Route exact path = '/characters/:id'>
                    <Character />
                </Route>
                <Route exact path = '/universal'>
                    <UniversalDataPage />
                </Route>
                <Route exact path = '/learning'>
                    <LearningPage />
                </Route>
                <Route path='*'>
                    <Redirect to = '/' />
                </Route>
            </Switch>
        </div>
    )
}

export default RouteContainer;