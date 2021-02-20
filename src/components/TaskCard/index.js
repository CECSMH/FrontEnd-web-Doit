import React from 'react';
import { format } from 'date-fns';
import IconsArray from '../../utils/icons';
import * as Styles from './styles';
import done from '../../assets/done.png';

// task cards 

//receive 4 parameters from the homes
function TaskCard({title, type, when, status}) {

  return (
    <Styles.Container>
        <div id="top">
            <img src={IconsArray[type]} alt="icone da tarefa"/>
            <p>{title}</p>
        </div>
        <div id="bottom">
            <strong>{format(new Date(when), 'dd/MM/yyyy')}</strong>
            <span>
              {status ? <img src={done} alt="Completo"/> : null}{format(new Date(when), 'HH:mm')}
            </span>
        </div>
    </Styles.Container>
  );
}

export default TaskCard;