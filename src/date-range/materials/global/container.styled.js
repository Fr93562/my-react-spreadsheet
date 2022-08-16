import styled from 'styled-components';
import { navigation } from './theme';

const width = 384;
const flexMaterials = `
    display: flex;
    align-items: center;
`;

export const FlexRow = styled.section`
    ${flexMaterials}
    flex-direction: row;
    justify-content: center;

    width: ${width}px;
`;

export const FlexRowSpaced = styled.section`
    ${flexMaterials}
    flex-direction: row;
    justify-content: space-around;

    width: 100%;
`;

export const FlexColumn = styled.article`
    ${flexMaterials}
    flex-direction: column;
    justify-content: flex-start;

    width: ${width + 40}px;

    position: absolute;
    right: 50%;
    top: 245px;

    background-color: white;
    margin-right: -${(width + 40) * 0.5}px;

    z-index: ${navigation.zIndex};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    section {
        margin: 16px 0px 0px 0px;
    }
`;
