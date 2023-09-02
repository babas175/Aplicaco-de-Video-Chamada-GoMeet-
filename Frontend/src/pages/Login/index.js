import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRemember] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberChange = (event) => {
        setRemember(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Senha:', password);
        console.log('Remember Password:', rememberPassword);
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
                    <button type="submit">Login</button>
                </form>
                <button type="submit" id='signup'>Cadastrar</button>
            </div>
        </div>
    );
}


export default Login;