import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return(
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <p className="navbar-brand">
              <Link to="/">Home</Link>
            </p>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="line"></span> 
            <span className="line"></span> 
            <span className="line"></span>
          </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                            
                {/* <li className="nav-item dropdown">
                    <p className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Character Data
                    </p>

                    <div className="dropdown-menu scrollable-menu" aria-labelledby="navbarDropdown">
                    <ul className="character-selector">
                        {selections}
                    </ul>
                    {this.props.user && this.props.user.admin ? <button className="nav-link btn" onClick={this.toggleModal}>Add Character +</button> : null}
                    
                    </div>
                </li> */}

                {/* <li className="nav-item">
                    <Link to="/universal" onClick={() => this.toggleMenu()} className="nav-link">Universal Data</Link>
                </li>

                <li className="nav-item">
                    <Link to="/learning" onClick={() => this.toggleMenu()} className="nav-link">Kame House</Link>
                </li> */}
                </ul>


                {/* <div className="nav-link">
                    {this.props.loggedInStatus 
                    ? 
                    <div>
                    Welcome, {user.username}!
                        <button type="button" onClick={this.logoutClick} className="btn btn-link">Logout</button>
                    </div>  
                    : 
                    <Link to='/login' onClick={() => this.toggleMenu()}>Login</Link>}
                </div> */}
            </div>
          </nav>
        </div>
      </React.Fragment>
    )
}

export default Header