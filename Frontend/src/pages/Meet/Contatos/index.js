import React,{useState} from 'react';
import './Contatos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faPhone,faInfo } from '@fortawesome/free-solid-svg-icons';


function Contatos(){
    const [searchName, setSearchName] = useState('');
    const [contatos] = useState([
        { id: 1, nome: 'João Silva', email: 'joao@email.com' },
        { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com' },
        { id: 3, nome: 'Luis Henrique', email: 'luis@email.com' },
        { id: 4, nome: 'Ana Ferreira', email: 'ana@email.com' }
    ]);
    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };
    const filteredContacts = contatos.filter((contato) =>
        contato.nome.toLowerCase().includes(searchName.toLowerCase())
    );
    const [modal, setModal] = useState(false);
    const [contatoModal, setContatoModal] = useState(null);

    const handleOpenModal = (contato) => {
        setContatoModal(contato);
        setModal(true);
    };

    const handleCloseModal = () => {
        setContatoModal(null);
        setModal(false);
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
                <ul>
                    {filteredContacts.map((contato) => (
                        <button onClick={() => handleOpenModal(contato)} id='openContato'>
                            <li key={contato.id} className="contact-item">
                                <strong>
                                    {contato.nome}
                                </strong>
                            </li>
                        </button>
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
                            <h2>{contatoModal.nome}</h2>
                            <p>{contatoModal.email}</p>
                            <button id='addChamada'><FontAwesomeIcon icon={faPhone} /> Iniciar Chamada</button>
                            <button id='detalhes'><FontAwesomeIcon icon={faInfo} /> Ver Perfil</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );

}
export default Contatos;