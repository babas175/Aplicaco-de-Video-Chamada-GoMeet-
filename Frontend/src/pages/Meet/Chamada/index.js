import React from 'react';
import './Chamada.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose,faVideoCamera,faMicrophone,faBars} from '@fortawesome/free-solid-svg-icons';

function Chamada(){
    return(
        <>
            <div className='video-container'>
            </div>
            <div className='botoes'>
                <button className='botao'><FontAwesomeIcon icon={faVideoCamera} /></button>
                <button className='botao'><FontAwesomeIcon icon={faMicrophone} /></button>
                <button className='botao'><FontAwesomeIcon icon={faClose} /></button>
                <button className='botao-op'><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className='chat'>
                <input type='text' placeholder='Envie sua mensagem' className='mensagem'></input>
            </div>
        </>
    );
}
export default Chamada;