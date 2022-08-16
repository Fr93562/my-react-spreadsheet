import styled from 'styled-components';

export const NavigationContainer = styled.div`
`;

export const NavigationContent = styled.button`
    border: none;
    background-color: transparent;

    cursor:  ${(props) => (props.enable ? 'pointer' : 'unset')};
`;
