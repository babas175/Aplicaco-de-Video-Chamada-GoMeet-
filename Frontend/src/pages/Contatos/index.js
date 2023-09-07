import React,{useState} from 'react';
import './Contatos.css';



function Contatos(){
    const [searchName, setSearchName] = useState('');
    const [contatos] = useState([
        { id: 1, nome: 'João', email: 'joao@email.com' },
        { id: 2, nome: 'Maria', email: 'maria@email.com' },
        { id: 3, nome: 'Luis', email: 'luis@email.com' },
        { id: 4, nome: 'Ana', email: 'ana@email.com' }
    ]);
    const handleSearchChange = (event) => {
        setSearchName(event.target.value);
    };
    const filteredContacts = contatos.filter((contato) =>
        contato.nome.toLowerCase().includes(searchName.toLowerCase())
    );
    return(
        <div>
            <div className='sidebar'>
                <h2>Go-Meet</h2>
                <ul>
                    <li>Iniciar chamada</li>
                    <li>Seus contatos</li>
                    <li>Seu perfil</li>
                    <li>Suas gravações</li>
                    <li>Sair</li>
                </ul>
            </div>
            <div className='page-container'>
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
            </div>
        </div>
    );

}
export default Contatos;