import React, { Fragment } from "react"
import Media from "react-media"
import RouteContainer from "../router_container/route_container"
import Header from "./header/header"

const mediaQueries = {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
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
                            <div>
                                <Header mediaType='mobile' /> 
                                <RouteContainer mediaType='mobile' />
                            </div>
                        }
                        { 
                            matches.medium 
                            && 
                            <div>
                                <Header mediaType='tablet' /> 
                                <RouteContainer mediaType='tablet' />
                            </div>
                        } 
                        { 
                            matches.large 
                            && 
                            <div>
                                <Header mediaType='desktop' /> 
                                <RouteContainer mediaType='desktop' />
                            </div>
                        }
                    </Fragment> 
                )}
            </Media>
        </React.Fragment>
    );
}

export default Navigation