import React from 'react';
import * as Styles from './styles';
import filterIcon from '../../assets/filter.png';

// filter card component
function FilterCard({ text, active }) {
  return (
    <Styles.Container active={active}>
      <img src={filterIcon} alt="Filtro" />
      <p>{text}</p>
    </Styles.Container>
  );
}

export default FilterCard;