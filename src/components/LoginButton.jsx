import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const Button = styled.button`
background-color: green;
`;


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick={() => loginWithRedirect()}>
            Login
        </Button>
    )
}

export default LoginButton;