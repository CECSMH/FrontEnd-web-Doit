import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import FilterCard from '../../components/FilterCard/index';
import TaskCard from '../../components/TaskCard/index';
import Modal from '../../components/modal/Index';

import * as Styles from './styles';
import Api from '../../services/Api';
import ConnectedVerify from '../../utils/connectedVerify'; // localstage from browser
import { Redirect } from 'react-router-dom';


function Home() {

  const [didMount, setDidMount] = useState(false);
  const [active, setActive] = useState('all');
  const [content, setContent] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState();

  //fetch all task based on macaddress
  async function load() {
    await Api.get(`/task/filter/${active}/${ConnectedVerify}`).then(r => {
      setContent(r.data);
    })
  }
  //if click on bell, fetch all tasks late
  function pendingFilter() {
    setActive('late');
  }
  // hide modal
  function modalHide() {
    setModal(false);
    load();
  }
  // show modal
  function modalShow(id) {
    setModalId(id);
    setModal(true);
  }


  useEffect(() => {
    setDidMount(true);
    load();
    return () => setDidMount(false);
  }, [active])


  return (
    <Styles.Container >

      { // if macaddress dont found in localstorage, redirect to sync page 
        !ConnectedVerify && <Redirect to="sync" />
      }

      <Header bellclick={pendingFilter} />

      <div id='filters'>
        <button type="button" onClick={() => setActive('done')}><FilterCard text="Concluido" active={active === 'done'} /></button>
        <button type="button" onClick={() => setActive('all')}><FilterCard text="Todos" active={active === 'all'} /></button>
        <button type="button" onClick={() => setActive('today')}><FilterCard text="Hoje" active={active === 'today'} /></button>
        <button type="button" onClick={() => setActive('week')}><FilterCard text="Semana" active={active === 'week'} /></button>
        <button type="button" onClick={() => setActive('month')}><FilterCard text="Mês" active={active === 'month'} /></button>
        <button type="button" onClick={() => setActive('year')}><FilterCard text="Ano" active={active === 'year'} /></button>
      </div>
      <hr></hr>
      <div id="taskCards">

        {
          content.map((d, i) => (
            <button onClick={() => modalShow(d._id)} key={i} >
              <TaskCard title={d.title}
                type={d.type}
                when={d.when}
                status={d.complete} />
            </button>
          ))
        }

      </div>

      <Footer />

      {modal ? <Modal show={modalHide} taskId={modalId} /> : null};

    </Styles.Container>
  );
}

export default Home;