import React, { Fragment } from "react";
import Media from "react-media";
import RouteContainer from "../router_container/route_container";
import FooterComponent from "./footer/footer.container";
import Header from "./header/header";

import './navigation.scss';

const mediaQueries = {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 999px)",
    large: "(min-width: 1000px) and (max-width: 1199px)",
    extra_large: "(min-width: 1200px)"
}

const Navigation = () => {
    return(
        <React.Fragment>
            <Media queries={mediaQueries}>
                {matches => (
                    <Fragment>
                        { 
                            matches.small 
                            && 
                            <div className="app-container">
                                <div className="app-content-container">
                                    <Header mediaType='mobile' /> 
                                    <RouteContainer mediaType='mobile' />
                                </div>
                                <FooterComponent mediaType='mobile'/>
                            </div>
                        }
                        { 
                            matches.medium 
                            && 
                            <div className="app-container">
                                <div className="app-content-container">
                                    <Header mediaType='tablet' /> 
                                    <RouteContainer mediaType='tablet' />
                                </div>
                                <FooterComponent mediaType='tablet' />
                            </div>
                        } 
                        { 
                            matches.large 
                            && 
                            <div className="app-container">
                                <div className="app-content-container">
                                    <Header mediaType='small_desktop' /> 
                                    <RouteContainer mediaType='small_desktop' />
                                </div>
                                <FooterComponent mediaType='small_desktop' />
                            </div>
                        }
                        { 
                            matches.extra_large 
                            && 
                            <div className="app-container">
                                <div className="app-content-container">
                                    <Header mediaType='large_desktop' /> 
                                    <RouteContainer mediaType='large_desktop' />
                                </div>
                                <FooterComponent mediaType='large_desktop' />
                            </div>
                        }
                    </Fragment> 
                )}
            </Media>
        </React.Fragment>
    );
}

export default Navigation