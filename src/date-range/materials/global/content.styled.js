import styled from 'styled-components';
import { colors, fonts } from './theme';

export const contentMaterials = '';

export const Legend = styled.time`
    font-family: ${fonts.primary};
    font-size: ${fonts.text};
    font-weight: bold;
    color: ${colors.black};
`;

export const Label = styled.label`
    font-family: ${fonts.secondary};
    font-size: ${fonts.label};
    font-weight: bold;
    color: ${colors.grey};
`;
