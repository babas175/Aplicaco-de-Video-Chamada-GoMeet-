import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;