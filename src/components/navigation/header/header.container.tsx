import { Menu, MenuItem } from '@material-ui/core';

import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown';
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

export interface MergeProps  {
   handleCharacterClick: (id: number) => any;
   toggleLogin: (user: User | null) => void;
}

export type HeaderProps = MergeProps & StateProps & DispatchProps;

const Header = (props: HeaderProps) => {
  const { characters, user, toggleLogin, handleCharacterClick} = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const characterMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginToggleClick = () => {
    toggleLogin(user);
  }

  const characterSelected = (id: number) => {
    handleClose();
    handleCharacterClick(id);
  }
    return(
      <React.Fragment>
        <div className="header-bar">
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
            <div className="univseral-page-container">
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
        <Menu 
          id="character-select-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
          {characters?.map((c: Character, key: number) => {
            return (
              <MenuItem key={key} onClick={() => characterSelected(c.id)}>
                 <img src={c.icon.url} alt={c.name + 'icon'}/>
              </MenuItem>
            )
            
          })}
        </Menu>
      </React.Fragment>
    )
}

export default Header