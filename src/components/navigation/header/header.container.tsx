import React from "react";
import { Link , Menu, MenuItem } from '@material-ui/core';
import { Character } from "../../../models/app/character.model";
import { Dispatch } from "redux";


export interface StateProps {
  characters: Character[] | null,
  
}

export interface DispatchProps {
  dispatch: Dispatch;
  getCharacters: () => void;
}

export interface MergeProps {
  
}

export type HeaderProps = MergeProps & StateProps & DispatchProps;

const Header = (props: HeaderProps) => {
  const { characters, getCharacters} = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const characterMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  if(!characters){
      getCharacters();
  }
    return(
      <React.Fragment>
        <div className="header-bar">
          <div className="links-container">
            <div className="home-container">
              <Link href="/">
                Home
              </Link>
            </div>
            <div className="character-container">
              <Link href="#" onClick={characterMenuClick} aria-controls="character-select-menu" aria-haspopup="true">
                Characters
              </Link>
            </div>
          </div>
          <div className="user-container">
              <div>
                Login go here soon
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
              <MenuItem key={key}onClick={handleClose}>
                <a href={`/characters/${c.id}`}>
                  <img src={c.icon.url} alt={c.name + 'icon'}/>
                </a>
              </MenuItem>
            )
            
          })}
        </Menu>
      </React.Fragment>
    )
}

export default Header