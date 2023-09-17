import React, { useState, useEffect } from 'react';
import './Contatos.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function Contatos() {
    const [searchName, setSearchName] = useState('');
    const [contatos, setContatos] = useState([]);
    const { state } = useLocation();
    const navigate = useNavigate();
    
    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    useEffect(() => {
        const token = state?.token;

        if (!token) {
            navigate('/login');
        }

        const PegarOToken = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios.get('http://localhost:3001/contatos', PegarOToken)
            .then((response) => {
                setContatos(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar contatos:', error);
            });
    }, [state]);

    const filteredContacts = contatos.filter((contato) =>
        contato.nome.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
        <>
            <h1>Buscar Contatos</h1>
            <div className='search-bar'>
                <input
                    type="text"
                    className='search-input'
                    placeholder='Pesquisar Contato'
                    value={searchName}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="contacts-container">
                <ul>
                    {filteredContacts.map((contato) => (
                        <li key={contato.id} className="contact-item">
                            <strong>{contato.nome}</strong> - {contato.email}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Contatos;
