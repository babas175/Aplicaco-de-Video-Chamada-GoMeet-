import React, { useState, useEffect } from 'react';
import './Contatos.css';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faPhone,faInfo,faPlusCircle,faTrashAlt,faEdit} from '@fortawesome/free-solid-svg-icons';
import rest from '../../../api';

function Contatos() {
    const [searchName, setSearchName] = useState('');
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState(null);
    const { state } = useLocation();
    
    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };

    useEffect(() => {
        let localToken = state?.token;
        setToken(localToken);

        const PegarOToken = {
            headers: {
                Authorization: `Bearer ${localToken}`,
            },
        };

        rest.get('http://localhost:3001/contatos', PegarOToken)
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
    const [modal, setModal] = useState(false);
    const [contatoModal, setContatoModal] = useState(null);
    const [modalAdd, setModalAdd] = useState(false);

    const handleOpenModal = (contato) => {
        setContatoModal(contato);
        setModal(true);
    };

    const handleCloseModal = () => {
        setContatoModal(null);
        setModal(false);
    };

    const handleOpenAddModal = () => {
        setModalAdd(true);
    };

    const handleCloseAddModal = () => {
        setModalAdd(false);
    };

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleCelularChange = (event) => {
        setCelular(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleDelete = async (contato) => {
        try {
            const response = await rest.delete(`DeletarContatos/${contato.email}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status !== 200) {
                console.log('Error ao remover contato.', (await response).statusText);
            } else {
                alert(`${contato.nome} foi deletado com sucesso`);
            }
        } catch (error) {
            console.error('Error ao remover contato:', error);
        }
    };

    const handleSubmitContato = async (event) => {
        event.preventDefault();

        const formData = {
            nome: nome,
            email: email,
            celular: celular,
        };

        try {
            const response = rest.post('CadastrarContatos', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if (response.status !== 201) {
                console.log('Error ao cadastrar contato.', (await response).statusText);
            }
        } catch (error) {
            console.error('Error ao cadastrar contato:', error);
        } finally {
            setCelular('');
            setNome('');
            setEmail('');
            setModalAdd(false);
        }
    };

    return(
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
                <button className='addContato' onClick={() => handleOpenAddModal()}><FontAwesomeIcon icon={faPlusCircle} /> Adicionar Contato</button>
                <ul>
                    {filteredContacts.map((contato) => (
                        <> 
                            <li key={contato.id} className="contact-item">
                                <div className='button-container'>
                                    <button onClick={() => handleOpenModal(contato)} id='openContato'>
                                        <strong>{contato.nome}</strong>
                                    </button>
                                    <button onClick={() => handleDelete(contato)} id='deletarContato'>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            {modal &&(
                <>
                    <div className="modal-backdrop"></div>
                    <div className="modal">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="close-icon"
                            onClick={handleCloseModal}
                        />
                        <div className="modal-content">
                            <div className='editar'>
                                <h2>{contatoModal.nome}</h2>
                                <FontAwesomeIcon icon={faEdit} className='editaContato'/>
                            </div>
                            <p>{contatoModal.email}</p>
                            <button id='addChamada'><FontAwesomeIcon icon={faPhone} /> Iniciar Chamada</button>
                            <button id='detalhes'><FontAwesomeIcon icon={faInfo} /> Ver Perfil</button>
                        </div>
                    </div>
                </>
            )}
            {modalAdd &&(
                <>
                    <div className="modal-backdrop"></div>
                    <div className="modal">
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="close-icon"
                            onClick={handleCloseAddModal}
                        />
                        <div className="modal-content">
                            <h2>Novo Contato</h2>
                            <form onSubmit={handleSubmitContato}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="nome"
                                        required
                                        value={nome}
                                        onChange={handleNomeChange}
                                        placeholder='Nome'
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        required
                                        onChange={handleEmailChange}
                                        placeholder='Email'
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="celular"
                                        value={celular}
                                        required
                                        onChange={handleCelularChange}
                                        placeholder='Celular'
                                    />
                                </div>
                                <button 
                                    className='addContato'
                                    type='submit'
                                >
                                    <FontAwesomeIcon icon={faPlusCircle} /> Adicionar
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Contatos;
