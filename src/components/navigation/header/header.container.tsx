import { Accordion, AccordionDetails, AccordionSummary, Menu, MenuItem } from '@material-ui/core';

import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import { Character } from "../../../models/app/character.model";
import { Dispatch } from "redux";
import React from "react";
import { User } from '../../../models/app/user.model';
import { Link } from 'react-router-dom';

export interface StateProps {
  characters: Character[] | null,
  user: User | null,
}

export interface DispatchProps {
  dispatch: Dispatch;
}

export interface OwnProps {
  mediaType: string;
}
export interface MergeProps  {
   handleCharacterClick: (id: number) => any;
   toggleLogin: (user: User | null) => void;
}

export type HeaderProps = MergeProps & StateProps & DispatchProps & OwnProps;

const Header = (props: HeaderProps) => {
  const { characters, user, mediaType, toggleLogin, handleCharacterClick} = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuEl, setMenuEl] = React.useState<null | HTMLElement>(null)

  const headerMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setMenuEl(event.currentTarget);
  }
  const characterMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }
  const handleClose = (nav: boolean) => {
    if(nav){
      setMenuEl(null);
    } else {
      setAnchorEl(null);
    }
  };

  const loginToggleClick = () => {
    toggleLogin(user);
    setMenuEl(null);
    setAnchorEl(null);
  }

  const characterSelected = (id: number) => {
    setMenuEl(null);
    setAnchorEl(null);
    handleCharacterClick(id);
  }
    return(
      <React.Fragment>
        { mediaType === 'desktop' ?
          <div className={`header-bar ${mediaType}`}>
            <div className="links-container">
              <div className="home-container">
                <Link to='/'>
                  Home
                </Link>
              </div>
              <div className="character-container">
                <button onClick={characterMenuClick} aria-controls="character-select-menu" aria-haspopup="true">
                  Characters 
                  <ArrowDropDownIcon />
                </button>
              </div>
              <div className="universal-page-container">
                <Link to='/universal'>
                  Universal Data
                </Link>
              </div>
              <div className="learning-page-container">
                <Link to='/learning'>
                  Kame House
                </Link>
              </div>
              {user?.admin ? 
                <div className="admin-page-container">
                  <Link to="/admin">
                    Admin
                  </Link>
                </div>
                : 
                null
              }
            </div>
            <div className="user-container">
                <div>
                  {user 
                  ?
                  <div>
                    Hello, {user.username} <button onClick={loginToggleClick}>Logout</button>
                  </div> 
                  :
                  <button onClick={loginToggleClick}>Login</button>
                  }
                </div>
            </div>
          </div>
          :
          <div className={`header-bar ${mediaType}`}>
            <div className="header-menu-button">
              <button onClick={headerMenuClick} aria-controls="character-select-menu" aria-haspopup="true">
                <MenuIcon />
              </button>
            </div>
          </div>
        }
        <Menu 
          id="character-select-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={(() => handleClose(false))}
          >
          {characters?.map((c: Character, key: number) => {
            return (
              <MenuItem key={key} onClick={() => characterSelected(c.id)}>
                 <img src={c.icon.url} alt={c.name + 'icon'}/>
              </MenuItem>
            )
            
          })}
        </Menu>
        <Menu
          id="header-bar-menu"
          anchorEl={menuEl}
          keepMounted
          className="header-bar-menu"
          open={Boolean(menuEl)}
          onClose={(() => handleClose(true))}
          >
          <MenuItem >
            <Link to='/' onClick={(() => handleClose(true))}>
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Accordion>
              <AccordionSummary>
                Characters
                <ArrowDropDownIcon />
              </AccordionSummary>
              <AccordionDetails>
                <ul className="character-list">
                  {characters?.map((c: Character, key: number) => {
                      return (
                        <div className="icon-select" key={key} >
                          <img src={c.icon.url} alt={c.name + 'icon'} onClick={() => characterSelected(c.id)}/>
                        </div>
                      )
                    })
                  }
                </ul>
              </AccordionDetails>
            </Accordion>
          </MenuItem>
          <MenuItem>
            <Link  to='/universal' onClick={(() => handleClose(true))}>
              Universal Data
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/learning' onClick={(() => handleClose(true))}>
              Kame House
            </Link>
          </MenuItem>
            { user?.admin ? 
                  <MenuItem>
                    <Link to="/admin" onClick={(() => handleClose(true))}>
                      Admin
                    </Link>
                  </MenuItem>
                : 
                null
            }
            {
              user 
              ?
              <MenuItem>
                <button onClick={loginToggleClick}>Logout</button>
              </MenuItem>
              :
              <MenuItem>
                <button onClick={loginToggleClick}>Login</button>
              </MenuItem>
            }
        </Menu>
      </React.Fragment>
    )
}

export default Header