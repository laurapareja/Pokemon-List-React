import React from 'react';
import '../stylesheets/App.css';
import PokeList from './Pokelist';
import Pokemon from '../data/data-info.json';
import '../stylesheets/App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: Pokemon,
            favorites: []
        };
        this.isFavorite = this.isFavorite.bind(this);
    }

    isFavorite(event) {
        const favorites = this.state.favorites;
        const pokemones = this.state.pokemon;
        const pokemonSelectedName = event.currentTarget.attributes.name.nodeValue;
        const pokemonCard = event.currentTarget;

        console.log(pokemonCard)

        if (favorites.includes(pokemonSelectedName)) {
            const indexPokemonSelected = favorites.findIndex(pokemonName => pokemonName === pokemonSelectedName)

            favorites.splice(indexPokemonSelected, 1)
            pokemonCard.className = 'cardPokemon';

        } else {
            const pokemonChoosed = pokemones.find(pokemon => pokemon.name === pokemonSelectedName);
            favorites.push(pokemonChoosed.name)
            pokemonCard.className = 'cardPokemon favorite';
        }
    }



    render() {
        const data = this.state.pokemon;
        return (
            <div>
                <header >
                    <h1 className="title" > Mi lista de pokemon </h1>
                </header>
                <main className="main" >
                    <div className="info">
                        <h2 className="infoTitle">Pokemones favoritos</h2>
                        <div className="boxFavorite"></div>
                    </div>

                    <PokeList
                        info={data}
                        action={this.isFavorite}
                    />
                </main>
            </div>
        );
    }
}

export default App;