import { Link as ReactLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './Meet.css';
import { Box, Container, Heading, List, ListItem,Link } from '@chakra-ui/react';
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
                        <Link to='chamada'  state={state} as={ReactLink} color={'white'}>Iniciar chamada</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='contatos' state={state} as={ReactLink} color={'white'}>Seus contatos</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='perfil' state={state} as={ReactLink} color={'white'}>Seu perfil</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='historico' state={state} as={ReactLink} color={'white'}>Suas gravações</Link>
                    </ListItem>
                    <ListItem>
                        <Link to='/login' state={state} as={ReactLink} color={'white'}>Sair</Link>
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