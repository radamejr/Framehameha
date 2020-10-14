import React from 'react';
import { Character } from '../../../models/app';
import DBButton from '../../../helpers/ui/db_button'
import './about.scss'

interface OwnProps {
    character: Character,
    admin: boolean | undefined,
}

type AboutContainerProps = OwnProps;

const AboutContainer = (props: AboutContainerProps) => {
    const { character, admin } = props;
    return (
        <div className="about-container">
            <div className="about-text">
                <h4>
                    {character.name}
                </h4>
                <p>
                    {character.about}
                </p>
                <p>
                    Looking to get some more in-depth information? Check out {character.name}'s character <a href={character.discord_link} target="_blank" rel="noopener noreferrer" role="button">discord</a>.
                </p>
                <p>
                    You can also find combo information located on <a href="https://combosuki.com/game.php?gameid=1" target="_blank" rel="noopener noreferrer" role="button">Combosuki</a>'s website for {character.name} <a href={character.combo_doc_link} target="_blank" rel="noopener noreferrer" role="button">here</a>.
                </p>
                <p>
                    {character.dlc ? `${character.name} is not included in the base game, they are DLC.` : `${character.name} is included in the base game.`}
                </p>
            </div>
            <div className="character-img">
                <img src={character.character_picture.url} alt={character.name}/>
            </div>
            {admin ? 
            <div className='admin-button'>
                <DBButton type='edit' content='character' character={character} />
            </div>
            :
            null}
        </div>
    )
}

export default AboutContainer