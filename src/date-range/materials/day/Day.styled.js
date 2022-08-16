import styled from 'styled-components';
import { colors, fonts } from '../global/theme';

export const DayContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 51px;
    height: 51px;

    border-radius: 50%;
    border: 2px solid transparent;

    cursor: pointer;

    &:hover {
        border: 2px solid ${colors.blue};
    }

    ${(props) => (props.type === 'alone' || props.type === 'start' || props.type === 'end') && `
        background-color: ${colors.blue};
        border: 2px solid ${colors.blue};
    `}

    ${(props) => props.type === 'range' && `
        background-color: ${colors.lightBlue};
        border-radius: unset;

        &:hover {
            border: 2px solid transparent;
        }
        `
}

    ${(props) => !props.enable && `
        cursor: unset;
        
        &:hover {
            border: 2px solid transparent;
        }
    `}
`;

export const DayContent = styled.span`
    font-family: ${fonts.secondary};
    font-size: ${fonts.label};
    font-weight: bold;
    color: ${colors.black};

    ${(props) => (props.type === 'alone' || props.type === 'start' || props.type === 'end') && `
        color: ${colors.white};
    `}

    ${(props) => (props.type === 'range') && `
    color: ${colors.blue};
    `}

    ${(props) => !props.enable && `
    color: ${colors.grey};
    `}
`;
