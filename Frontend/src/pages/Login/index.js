import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import rest from '../../api';
import { Box, Button, FormControl, FormLabel, Heading, Input, InputGroup} from '@chakra-ui/react';


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
                navigate('../Meet/contatos');
            } else {
                console.log('Credenciais inválidas');
            }
        } catch (error) {
            navigate('../login');
        }
    };
    

    

    return (
        <Box className="center-box">
            <Box className="login-box">
                <Heading as='h3'>Login</Heading>
                <Heading as='h6'>Entre ou Cadastre-se</Heading>
                <FormControl onSubmit={handleSubmit}>
                    <InputGroup>
                        <Input 
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder='Email'
                        />
                    </InputGroup>
                    <InputGroup>
                        <Input 
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder='Senha'
                        />
                    </InputGroup>
                    <InputGroup className='checkbox-group'>
                        <Input
                            type="checkbox"
                            checked={rememberPassword}
                            onChange={handleRememberChange}
                            id="rememberPassword"
                        />
                        <FormLabel htmlFor="rememberPassword" className="checkbox-label">
                            Lembrar
                        </FormLabel>
                    </InputGroup>
                    <Button type="submit">Login</Button>
                    <Button onClick={() => navigate('/cadastro')}>Cadastrar</Button>
                </FormControl>
            </Box>
        </Box>
    );
}


export default Login;
