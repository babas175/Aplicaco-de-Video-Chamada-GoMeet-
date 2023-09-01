import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro(){
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };
    const handlePhotoChange = (event) => {
        const selectedPhoto = event.target.files[0];
        setPhoto(selectedPhoto);
    };
      
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas são diferentes.');
            return;
        }
        if (photo) {
            console.log('Foto selecionada:', photo);
        } else {
            console.log('Nenhuma foto selecionada.');
        }
        
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Senha:', password);

        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setPhoto(null);
      };
    return(
        <div className="center-box">
            <div className="signup-box">
                <h3>Cadastre-se</h3>
                <h6>Crie sua conta</h6>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                        type="username"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder='Nome de usuário*'
                        required
                        />
                    </div>
                    <div className="input-group">
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Email*'
                        required
                        />
                    </div>
                    <div className="input-group">
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Senha*'
                        required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            placeholder='Confirme sua senha*'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="photo">Foto de Perfil:</label>
                        <input
                            type="file"
                            id="photo"
                            accept="image/*"
                            onChange={handlePhotoChange}
                        />
                    </div>
                    
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
export default Cadastro;