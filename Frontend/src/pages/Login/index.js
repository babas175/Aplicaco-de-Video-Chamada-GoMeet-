import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Button from '../../components/Button';
import rest from '../../api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRemember] = useState(false);
    const [error, setError] = useState(null);
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
                const authToken = response.data.token;
                navigate('/Meet/contatos', { state: { token: authToken } });
            } else {
                setError('Credenciais inválidas');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Email ou Senha invalida !');
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
                {error && <div className="error-message">{error}</div>} {/* Exibe a mensagem de erro */}
                <Button onClick={() => navigate('/cadastro')} type="submit" id='signup'>Cadastrar</Button>
            </div>
        </div>
    );
}

export default Login;
