import { useNavigate } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

const Link = (props) => {
    const navigate = useNavigate();

    return (
        <ChakraLink
            onClick={() => props.to ? navigate(props.to, props.state) : null}
        >
            {props.children}
        </ChakraLink>
    );
};

export default Link;