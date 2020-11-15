import { Switch, Route, Redirect } from "react-router-dom";
import Media from 'react-media';
import React, { Fragment } from "react";
import Home from "../static/home/home";
import Character from "../character/character";
import UniversalDataPage from "../static/universal_data/universal_data";
import LearningPage from "../static/learning/learning";
import AdminContainer from "../admin/admin";
const mediaQueries = {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
}

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
                    <Media queries={mediaQueries}>
                        {matches => (
                            <Fragment>
                                {matches.small && <Character mediaType='mobile' />}
                                {matches.medium && <Character mediaType='tablet' />}
                                {matches.large && <Character mediaType='desktop' />}
                            </Fragment>
                        )}
                    </Media>
                </Route>
                <Route exact path = '/universal'>
                    <Media queries={mediaQueries}>
                        {matches => (
                            <Fragment>
                                {matches.small && <UniversalDataPage mediaType='mobile' />}
                                {matches.medium && <UniversalDataPage mediaType='tablet' />}
                                {matches.large && <UniversalDataPage mediaType='desktop' />}
                            </Fragment>
                        )}
                    </Media>
                </Route>
                <Route exact path = '/learning'>
                    <Media queries={mediaQueries}>
                        {matches => (
                            <Fragment>
                                {matches.small && <LearningPage mediaType='mobile' />}
                                {matches.medium && <LearningPage mediaType='tablet' />}
                                {matches.large && <LearningPage mediaType='desktop' />}
                            </Fragment>
                        )}
                    </Media>
                </Route>
                <Route path='*'>
                    <Redirect to = '/' />
                </Route>
            </Switch>
        </div>
    )
}

export default RouteContainer;