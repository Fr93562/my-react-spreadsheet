import styled from 'styled-components';
import { colors, fonts } from '../global/theme';

export const ButtonContainer = styled.div`
    margin-bottom: 16px;
`;

export const ButtonContent = styled.button`
    font-family: ${fonts.primary};
    font-size: ${fonts.label};
    font-weight: bold;

    border: none;
    border-radius: 8px;
    padding: 15px 24px;

    cursor: default;

    ${(props) => props.role === 'full'
        && `
        color: ${colors.white};
        background-color: ${props.enable ? colors.blue : colors.lightGrey};
        `
}

    ${(props) => props.role === 'minimalist'
        && `
        background-color: ${colors.white};
        color: ${props.enable ? colors.black : colors.lightGrey};
        `
}

    ${(props) => props.enable && 'cursor: pointer;'}
`;
