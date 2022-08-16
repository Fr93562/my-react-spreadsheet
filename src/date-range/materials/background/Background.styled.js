/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { navigation } from '../global/theme';

export const Container = styled.div`
    min-height: 100%;
    min-width: 100%;

    position: absolute;
    top: 0px;
    left: 0%;

    z-index: ${navigation.zIndex - 1};
`;
