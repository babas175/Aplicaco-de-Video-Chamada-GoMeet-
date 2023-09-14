import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Contatos from './pages/Meet/Contatos';
import Meet from './pages/Meet';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/cadastro' element={<Cadastro />}/>
                <Route path='/meet/' element={<Meet />}>
                    <Route index element={<Contatos />}/>
                    <Route path='contatos' element={<Contatos />}/>
                    <Route path='chamada' element={<div>Não implementado</div>}/>
                    <Route path='perfil' element={<div>Não implementado</div>}/>
                    <Route path='historico' element={<div>Não implementado</div>}/>
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;