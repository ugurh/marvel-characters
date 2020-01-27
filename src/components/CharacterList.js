import React from 'react'
import lodash from 'lodash'

import CharacterListItem from './CharacterListItem'

const CharacterList = props => {
    console.log(props.characters);
        return (
            
                <div className="col-md-4">
                    {lodash.map(props.characters,character => (
                        <CharacterListItem  key={character.id} character={character} handleChangeSelectedCharacter={props.handleChangeSelectedCharacter}/>
                    ))}
                </div>
           
        );
    
};
export default CharacterList;