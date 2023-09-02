import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/cadastro' element={<Cadastro />}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;