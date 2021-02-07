import React, { useMemo } from 'react';
import { format } from 'date-fns';
import IconsArray from '../../utils/icons';
import * as Styles from './styles';
import done from '../../assets/done.png';

// task cards 

//receive 4 parameters from the homes
function TaskCard({title, type, when, status}) {

  // split and format date and hour respectively
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));

  return (
    <Styles.Container>
        <div id="top">
            <img src={IconsArray[type]} alt="icone da tarefa"/>
            <p>{title}</p>
        </div>
        <div id="bottom">
            <strong>{date}</strong>
            <span>
              {status ? <img src={done} alt="Completo"/> : null}{hour}
            </span>
        </div>
    </Styles.Container>
  );
}

export default TaskCard;