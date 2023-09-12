import { Outlet } from 'react-router-dom';
import './Meet.css';

const Meet = () => {
    return (
        <>
            <div className='sidebar'>
                <h2>Go-Meet</h2>
                <ul>
                    <li>Iniciar chamada</li>
                    <li>Seus contatos</li>
                    <li>Seu perfil</li>
                    <li>Suas gravações</li>
                    <li>Sair</li>
                </ul>
            </div>
            <div className='page-container'>
                <Outlet />
            </div>
        </>
    );
};

export default Meet;