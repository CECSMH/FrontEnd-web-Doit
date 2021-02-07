import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import Api from '../../services/Api';
import ConnectedVerify from '../../utils/connectedVerify';

function Header({ bellclick, sync }) {

  const [didMount, setDidMount] = useState(false); // state to mount and unmount async function
  const [count, setCount] = useState(); // state to store number from task late

  const invisible = count > 0 ? { opacity: 1 } : { opacity: 0 }; // invisible number from notification if dont have any notification


  //get number from the tasks late
  async function late() {
    await Api.get(`/task/filter/late/${ConnectedVerify}`).then(r => {
      setCount(r.data.length);
    })
  }

  //delete the mac from the localstorage
  function DEL() {
    localStorage.removeItem('@doit/mac');
    window.location.reload();
  }

  useEffect(() => {
    setDidMount(true);
    late();
    return () => setDidMount(false);
  }, [])


  return (
    <Styles.Container>
      <Styles.Lside>

        <Link to="/">
          <img src={logo} alt='Logo DoiT' />
        </Link>

      </Styles.Lside>


      {!sync && //hide buttons in syncpage
        <Styles.Dside>


          <Link to="/">HOME</Link>
          <span className="divider" />
          <Link to="/task">NOVA TAREFA</Link>
          <span className="divider" />
          <a onClick={DEL}>SAIR</a>
          <span className="divider" />

          <button onClick={bellclick} id="bellNumber">
            <img src={bell} alt="Notificações" />
            <span style={invisible}>{count}</span>
          </button>


        </Styles.Dside>
      }
    </Styles.Container>
  );
}

export default Header;