import React from "react";

class Pokemon extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.map((item, index) => {
          return (
            <li className="pokemon" key={`p${index}`}>
              <div className="cardPokemon">
                <img alt={item.name} src={item.url}></img>
                <h2> {item.name}</h2>
                <ul>{this.props.category[index]}</ul>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Pokemon;
