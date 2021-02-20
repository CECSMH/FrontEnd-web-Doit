import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import * as Styles from './styles';
import exit from '../../assets/exit.png';
import edit from '../../assets/edit.png';
import date from '../../assets/date.png';
import clock from '../../assets/clock.png';

import Api from '../../services/Api';

function Modal({ show, taskId }) {

    const [Task, setTask] = useState(0);
    const [Status, setStatus] = useState(false);

    //detects click outside the modal
    const outClickDetect = (c) => {
        if (c.target.id === 'back') show();
    }

    // fetch the task data
    async function fetchOne() {
        await Api.get(`/task/${taskId}`).then(r => {
            setTask(r.data);
            setStatus(r.data.complete);
        });
    }

    // toggle status from the task (done or pending)
    async function toggleStatus(S) {
        await Api.put(`/task/${taskId}/${S}`).then()
    }

    // delete task
    async function Delete() {
        const cde = window.confirm('Deseja realmente excluir a tarefa?')

        if (cde === true) {
            await Api.delete(`/task/${taskId}`).then(() => { show() })

        }
    }

    useEffect(() => {
        fetchOne();
    }, [])


    return (
        <Styles.Container id="back" onClick={outClickDetect}>
            <div id="content">
                <Styles.Top>

                    <Link to={`/task/${taskId}`}><img src={edit} alt="editar" /></Link>
                    <button onClick={show}><img src={exit} alt="sair" /></button>

                </Styles.Top>
                <Styles.Mid>

                    <span>Título</span>
                    <input type="text" value={Task !== 0 ? Task.title : ''} disabled="disabled" />

                    <span>Descriçao</span>
                    <textarea value={Task !== 0 ? Task.description : ''} disabled="disabled"></textarea>

                    <div id="time">

                        <span>
                            <img src={date} alt="data" />{format(new Date((Task !== 0 ? Task.when : null)), 'dd/MM/yyyy')}
                        </span>

                        <span>
                            <img src={clock} alt="hora" />{format(new Date((Task !== 0 ? Task.when : null)), 'HH:mm')}
                        </span>

                    </div>

                </Styles.Mid>
                <Styles.Bottom>

                    <label>
                        <input id="toggle" type="checkbox" className="switch shadow" checked={Status}
                            onChange={() => { toggleStatus(!Status); setStatus(!Status) }} />
                        <label htmlFor="toggle"></label>
                        <span>COMCLUÍDA</span>
                    </label>

                    <button onClick={Delete}>EXCLUIR TAREFA</button>

                </Styles.Bottom>
            </div>
        </Styles.Container>
    )
}

export default Modal;