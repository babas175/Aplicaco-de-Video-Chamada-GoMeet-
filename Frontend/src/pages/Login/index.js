import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Button from '../../components/Button';
import rest from '../../api';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberChange = (event) => {
        setRemember(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = {
            email: email,
            password: password,
        };
    
        try {
            const response = await rest.post('login', formData);
    
            if (response.status === 200) {
                // Abaixo voce deves devem colocar em qual pagina deveria ir no caso que o login foi feito com sucesso
                console.log('Login bem-sucedido! Token:', response.data.token);
                //por exemplo Abaixo
                //history.push('/perfil')
            } else {
                console.log('Credenciais inválidas');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };
    

    return (
        <div className="center-box">
            <div className="login-box">
                <h3>Login</h3>
                <h6>Entre ou Cadastre-se</h6>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
            
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='Email'
                        />
                    </div>
        
                    <div className="input-group">
            
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Senha'
                        />
                    </div>
                    <div className="input-group checkbox-group">
                        <input 
                            type="checkbox"
                            checked={rememberPassword}
                            onChange={handleRememberChange}
                            id="rememberPassword"
                        />
                        <label htmlFor="rememberPassword" className="checkbox-label">
                            Lembrar
                        </label>
                    </div>
                    <Button type="submit">Login</Button>
                    
                </form>
                <Button onClick={() => navigate('/cadastro')} type="submit" id='signup'>Cadastrar</Button>
            </div>
        </div>
    );
}


export default Login;
