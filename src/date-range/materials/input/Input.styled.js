import styled from 'styled-components';
import { FlexRow } from '../global/container.styled';
import { fonts } from '../global/theme';

/**
 * Indique s'il s'agit d'un border left ou bord right
 * @param {*} type - string: right ou left
 * @returns : string: css
 */
function getBorder(type) {
    return `
        border-top-${type}-radius: 10px;
        border-bottom-${type}-radius: 10px;
    `;
}

export const InputContainer = styled(FlexRow)`
    ${(props) => props.type && getBorder(props.type)}
    border: 2px solid ${(props) => props.color};

    svg {
        margin-right: 8px;
    }
`;

export const InputContent = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 10px 0px 10px 0px;

    font-family: ${fonts.secondary};
    font-size: ${fonts.label};

    color: ${(props) => props.color};
    ${(props) => props.pointer && 'cursor: pointer;'}
`;
