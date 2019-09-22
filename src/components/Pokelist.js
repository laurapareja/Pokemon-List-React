import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.css'
import PropTypes from 'prop-types'

const PokeList = props => {
  const { info, action } = props;
  return (
    <ul>
      <li>
        <Pokemon data={info} action={action} />
      </li>
    </ul>
  );
}

PokeList.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokeList;
