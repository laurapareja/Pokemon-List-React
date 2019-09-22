import React from 'react';
import '../stylesheets/ListTypePokemon.css'
import PropTypes from 'prop-types'

const ListTypePokemon = props => {
    const { index, data } = props;
    const categoriesPokemons = data.map((info, i) => {
        const categoryPokemon = info.types;
        const typeOfPokemon = categoryPokemon.map(type => {
            return (<li className="categoryPokemon" key={type} > {type} </li>);
        })
        return typeOfPokemon
    })
    return (
        <ul className="categoryList">{categoriesPokemons[index]}</ul>
    )
}

ListTypePokemon.propTypes = {
    index: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListTypePokemon;