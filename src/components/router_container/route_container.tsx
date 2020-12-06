import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "../static/home/home";
import Character from "../character/character";
import UniversalDataPage from "../static/universal_data/universal_data";
import LearningPage from "../static/learning/learning";
import AdminContainer from "../admin/admin";

export interface OwnProps {
    mediaType: string;
}

export type RouteContainerProps = OwnProps;

const RouteContainer = (props: RouteContainerProps) => {

    const { mediaType } = props;

    return (
        <div className={`route-body ${mediaType}`}>
            <Switch>
                <Route exact path = '/'>
                    <Home mediaType={mediaType} />
                </Route>
                <Route exact path = '/admin'>
                    <AdminContainer />
                </Route>
                <Route exact path = '/characters/:id'>
                    <Character mediaType={mediaType} />
                </Route>
                <Route exact path = '/universal'>
                    <UniversalDataPage mediaType={mediaType} />
                </Route>
                <Route exact path = '/learning'>
                    <LearningPage mediaType={mediaType} />
                </Route>
                <Route path='*'>
                    <Redirect to = '/' />
                </Route>
            </Switch>
        </div>
    )
}

export default RouteContainer;