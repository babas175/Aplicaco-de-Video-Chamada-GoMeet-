import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Button, Center, Heading } from '@chakra-ui/react';
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
        <Center height='90vh' bg='white'>
            <Center
                p={40}
                borderRadius='10px'
                flexDirection='column'
                className='login-box'
                boxShadow='0 0 10px rgba(0, 0, 0, 0.2)'
                w={250}
            >
                <Heading as='h3' color='#8a2be2' textAlign='center'>
                    Login
                </Heading>
                <Heading as='h6' color='gray' textAlign='center'>
                    Entre ou Cadastre-se
                </Heading>
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
                {error && <div className="error-message">{error}</div>} 
                <Button onClick={() => navigate('/cadastro')} type="submit" id='signup'>Cadastrar</Button>
            </Center>
        </Center>
    );
}

export default Login;
