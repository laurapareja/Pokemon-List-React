import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul>
        <Pokemon data={this.props.info} category={this.props.category} />;
      </ul>
    );
  }
}

export default PokeList;
