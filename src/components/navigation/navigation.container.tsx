import React from "react"
import RouteContainer from "../router_container/route_container"
import Header from "./header/header"

const Navigation = () => {
    
    return(
        <React.Fragment>
            <Header />
            <RouteContainer />
        </React.Fragment>
    );
}

export default Navigation