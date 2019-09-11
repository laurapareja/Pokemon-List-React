import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="listPokemon">
        {this.props.data.map((item, index) => {
          return (
            <li className="pokemon" key={`p${index}`}>
              <div className="cardPokemon">
                <div className="pictureContainer">
                  <img alt={item.name} src={item.url} className="picturePokemon"></img>
                </div>
                <h2 className="namePokemon"> {item.name}</h2>
                <ul className="categoryList">{this.props.category[index]}</ul>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Pokemon;
