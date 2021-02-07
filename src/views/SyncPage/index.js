import React from 'react';
import { Redirect } from 'react-router-dom';
import * as Styles from './styles';
import QrCode from "react-qr-code";
import uuid from "react-uuid";
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Api from '../../services/Api';
import ConnectedVerify from '../../utils/connectedVerify';

const id = uuid();


function SyncPage(){

    console.log(id)
    // function to get mac based on qrcode captured from cellphone
    async function getMac(){
        await Api.get(`/task/sync/pc/${id}`).then(r => {
            if(!(r.data.mac === "not_yet" || r.data.mac === undefined)){
                localStorage.setItem('@doit/mac', r.data.mac)
                window.location.reload();
            }
          })
    }
    
    return(
        <Styles.Container>

            {ConnectedVerify && <Redirect to="/"/>}

            <Header sync="syncpage"/>

            <div id="content">
                <h2>CAPTURE O QRCODE ATRAVEZ DO APP</h2>
                <Styles.Code>
                    
                   <button type="button" onClick={getMac}><QrCode value={id} size={350} /></button>
                    
                </Styles.Code>
                <p>suas tarefas serão sincronizadas com as do seu smartphone</p>
            </div>
            
            <Footer/>
        </Styles.Container>
    )
}

export default SyncPage;