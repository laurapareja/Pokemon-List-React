import React from 'react';
import ListTypePokemon from './ListTypePokemon'
import '../stylesheets/Pokemon.css'
import PropTypes from 'prop-types';

const Pokemon = props => {
  const { data, action } = props;

  return (
    <div className="listPokemon">
      {data.map((pokemon, index) => {
        return (
          <div className='cardPokemon' id={pokemon.id} key={`p${pokemon.id}`} name={pokemon.name} onClick={action}>
            <div className="pictureContainer">
              <img alt={pokemon.name} src={pokemon.url} className="picturePokemon"></img>
            </div>
            <h2 className="namePokemon"> {pokemon.name}</h2>
            <ListTypePokemon data={data} index={index} />
          </div>
        );
      })}
    </div>
  )
}

Pokemon.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokemon;
