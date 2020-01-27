import React from 'react'
import lodash from 'lodash';

const Detail = props => {

    return (
      <div className="col-md-9">
        <div className="details">
          <div className="row">
            <div className="col-md-12">
              <h1>
                {props.character.name}
                <hr />
              </h1>
            </div>
            <div className="col-md-5">
              <img
                src={`${props.character.thumbnail.path}/portrait_uncanny.${props.character.thumbnail.extension}`}
                alt={props.character.name}
              />
            </div>
            <div className="col-md-7">
              <p>{props.character.description}</p>
              <h4>Comics({props.character.series.available})</h4>
              <ul>
                {lodash.map(props.character.comics.items, comic => (
                  <li key={comic.resourceURI}>{comic.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Detail;