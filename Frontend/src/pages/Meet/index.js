import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Meet.css';
import { Box, Container, Heading, List, ListItem } from '@chakra-ui/react';
import { useEffect } from 'react';

const Meet = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const token = state?.token;

        if (!token) {
            alert('Usuário não autenticado');
            navigate('/login');
        }
    }, [] );
    
    return (
        <>
            <Box className='sidebar'>
                <Heading as="h2">Go-Meet</Heading>
                <List>
                    <ListItem>
                        <Link to='chamada'>Iniciar chamada</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='contatos'>Seus contatos</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='perfil'>Seu perfil</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='historico'>Suas gravações</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/login'>Sair</Link>
                    </ListItem>
                </List>
            </Box>
            <Container className='page-container'>
                <Outlet />
            </Container>
        </>
    );
};

export default Meet;