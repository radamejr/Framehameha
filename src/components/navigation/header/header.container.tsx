import { Button, Link, Menu, MenuItem } from '@material-ui/core';

import ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown';
import { Character } from "../../../models/app/character.model";
import { Dispatch } from "redux";
import React from "react";
import { User } from '../../../models/app/user.model';

export interface StateProps {
  characters: Character[] | null,
  user: User | null,
}

export interface DispatchProps {
  dispatch: Dispatch;
  getCharacters: () => void;
  
}

export interface MergeProps  {
   handleCharacterClick: (id: number) => any;
   toggleLogin: (user: User | null) => void;
}

export type HeaderProps = MergeProps & StateProps & DispatchProps;

const Header = (props: HeaderProps) => {
  const { characters, user, toggleLogin, handleCharacterClick, getCharacters} = props;
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

  if(!characters){
      getCharacters();
  }
    return(
      <React.Fragment>
        <div className="header-bar">
          <div className="links-container">
            <div className="home-container">
              <Button href="/">
                Home
              </Button>
            </div>
            <div className="character-container">
              <Button onClick={characterMenuClick} aria-controls="character-select-menu" aria-haspopup="true">
                Characters 
                <ArrowDropDownIcon />
              </Button>
            </div>
            <div className="univseral-page-container">
              <Button href="/universal" >
                Universal Data
              </Button>
            </div>
            <div className="learning-page-container">
              <Button href="/learning" >
                Kame House
              </Button>
            </div>
          </div>
          <div className="user-container">
              <Button onClick={loginToggleClick}>
                {user ? `Hello, ${user.username}` : 'Login'}
              </Button>
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