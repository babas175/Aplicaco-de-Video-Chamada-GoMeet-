import { Link, Outlet } from 'react-router-dom';
import './Meet.css';
import { Box, Container, Heading, List, ListItem } from '@chakra-ui/react';

const Meet = () => {
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