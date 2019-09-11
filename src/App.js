import React from 'react';
// import PokeList from './components/Pokelist';
import './App.css';
import PokeList from './components/Pokelist';
import Pokemon from './data/data-info.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: Pokemon,
    };
  }

  render() {
    const data = this.state.pokemon;
    const categoriesPokemons = data.map((pokemon, i) => {
      const categoryPokemon = pokemon.types;
      const array = categoryPokemon.map(item => {
        return (
          <li className="categoryPokemon" key={item}>
            {item}
          </li>
        );
      });
      return array;
    });

    return (
      <>
        <header>
          <h1 className="title">Mi lista de pokemon</h1>
        </header>
        <main className="main">
          <PokeList info={data} category={categoriesPokemons} />
        </main>
      </>
    );
  }
}

export default App;
