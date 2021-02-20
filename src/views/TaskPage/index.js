import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Icons from '../../utils/icons';
import date1 from '../../assets/date.png';
import clock from '../../assets/clock.png';

import * as Styles from './styles';
import Api from '../../services/Api';
import { format, isPast } from 'date-fns';
import ConnectedVerify from '../../utils/connectedVerify'; // localstorage from browser


function TaskPage({ match }) {
  //states to store data before edit or create
  const [didMount, setDidMount] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [mac, setMac] = useState(ConnectedVerify);
  const [status, setStatus] = useState(false);
  const [redirect, setRedirect] = useState(false);

  //if edit, load data from task
  async function load() {
    if (match.params.id) {
      await Api.get(`/task/${match.params.id}`).then(r => {
        setType(r.data.type);
        setTitle(r.data.title);
        setDescription(r.data.description);
        setDate(format(new Date(r.data.when), 'yyyy-MM-dd'));
        setTime(format(new Date(r.data.when), 'HH:mm'));
        setStatus(r.data.complete);
      })
    }
  }

  //onclick save, create or update task
  async function Submit() {

    //validation 
    if (!type) {
      return window.alert("O tipo é obrigatorio!")
    } else if (!title) {
      return window.alert("O titulo é obrigatorio!")
    } else if (!description) {
      return window.alert("A descrição é obrigatoria!")
    } else if (!date) {
      return window.alert("A data é obrigatoria!")
    } else if (isPast(new Date(date))) {
      return window.alert("Escolha uma data no futuro!")
    } else if (!time) {
      return window.alert("A hora é obrigatoria!")
    } else {

      //if edit(contains id), this function update task
      if (match.params.id) {
        await Api.put(`/task/${match.params.id}`, {
          mac, type, title, description, when: `${date}T${time}:00.000`,
          complete: status

        }).then(resp => { setRedirect(true) })

        //if create, this function create task with same macaddress from device
      } else {
        await Api.post(`/task`, {
          mac, type, title, description, when: `${date}T${time}:00.000`,
          complete: status

        }).then(resp => { setRedirect(true) })
      }
    }

  }
  //delete task
  async function Delete() {
    const cde = window.confirm('Deseja realmente excluir a tarefa?')

    if (cde === true) {
      await Api.delete(`/task/${match.params.id}`).then(() => { setRedirect(true) })

    }
  }


  useEffect(() => {
    setDidMount(true);
    load();
    return () => setDidMount(false);
  }, [])


  return (
    <Styles.Container>

      {!ConnectedVerify && <Redirect to="sync" />}
      {redirect && <Redirect to='/' />}

      <Header />

      <div id="content" >

        <Styles.Icons>{
          Icons.map((icon, index) => (

            index > 0 ?
              <button type="button" key={index} onClick={() => setType(index)}>

                <img src={icon} alt="tipos" className={type && type !== index ? 'inative' : null} />

              </button> : null

          ))
        }</Styles.Icons>

        <Styles.Mid>
          <span>Título</span>
          <input type="text" value={title} onChange={(t) => setTitle(t.target.value)} />

          <span>Descriçao</span>
          <textarea name="description" type="text" value={description} onChange={(d) => setDescription(d.target.value)} ></textarea>

          <div id="time">

            <span className="times">

              <span>Data</span>

              <span>
                <input type="date" value={date} onChange={(d) => setDate(d.target.value)} />
                <img src={date1} alt="data" />
              </span>

            </span>

            <span className="times">

              <span>Hora</span>

              <span>
                <input type="time" value={time} onChange={(t) => setTime(t.target.value)} />
                <img src={clock} alt="hora" />
              </span>

            </span>

          </div>
        </Styles.Mid>

        {match.params.id &&
          <Styles.Bottom>

            <label>
              <input id="toggle" type="checkbox" checked={status} className="switch shadow" onChange={() => setStatus(!status)} />
              <label htmlFor="toggle"></label>
              <span>COMCLUÍDA</span>
            </label>

            <label>
              <button onClick={Delete}>EXCLUIR TAREFA</button>
            </label>

          </Styles.Bottom>
        }

        <button type="button" id="save" onClick={() => Submit()}>SALVAR TAREFA</button>

      </div>

      <Footer />
    </Styles.Container>
  );
}

export default TaskPage;