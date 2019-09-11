import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    return (
      <ul className="listPokemon">
        <Pokemon data={this.props.info} category={this.props.category} />
      </ul>
    );
  }
}

export default PokeList;
