import { Link, Outlet } from 'react-router-dom';
import './Meet.css';

const Meet = () => {
    return (
        <>
            <div className='sidebar'>
                <h2>Go-Meet</h2>
                <ul>
                    <li>
                        <Link to='chamada'>Iniciar chamada</Link>
                    </li>
                    <li>
                        <Link to='contatos'>Seus contatos</Link>
                    </li>
                    <li>
                        <Link to='perfil'>Seu perfil</Link>
                    </li>
                    <li>
                        <Link to='historico'>Suas gravações</Link>
                    </li>
                    <li>
                        <Link to='/login'>Sair</Link>
                    </li>
                </ul>
            </div>
            <div className='page-container'>
                <Outlet />
            </div>
        </>
    );
};

export default Meet;