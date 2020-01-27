import React from 'react'

const CharacterListItem = props => {
   // const { character } = props.character;
    return (
      <div className="list-item" onClick={()=>props.handleChangeSelectedCharacter(props.character)}>
        <div className="row">
          <div className="col-md-3">
            <img
              src={`${props.character.thumbnail.path}/portrait_medium.${props.character.thumbnail.extension}`}
              alt={props.character.name}
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h3>{props.character.name}</h3>
                <p>{props.character.description && props.character.description.length > 50
                  ? props.character.description.substr(0, 50) + '...' : props.character.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default CharacterListItem;