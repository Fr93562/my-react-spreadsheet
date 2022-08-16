/* eslint-disable no-nested-ternary */
import { InputContainer, InputContent } from './Input.styled';
import format from '../../provider/format';
import { colors } from '../global/theme';
import drawCalendar from '../assets/drawCalendar';
import Logo from '../Logo/Logo';

/**
 * Composant UI
 *
 * Représente l'input cliquable avec une action liée
 * En fonction des props, il possède trois styles différents et peut-être highlight
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function Input(props) {
    const {
        type, date, highlight, pointer,
    } = props;

    /**
     * Indique l'état du bouton
     * @returns - string: état actuel
     */
    function getState() {
        let response = '';

        if (date) {
            response = 'active';
        }
        if (highlight === type) {
            response = 'selected';
        }
        return response;
    }

    /**
     * Indique les couleurs actuelles du bouton
     * @returns - string: code hexadécimal
     */
    function getColor() {
        let color = colors.grey;
        const state = getState();

        if (state) {
            if (state === 'active') {
                color = colors.black;
            } else {
                color = colors.blue;
            }
        }
        return color;
    }

    return (
        <InputContainer type={type} color={getColor()}>
            <InputContent color={getColor()} pointer={pointer}>
                <Logo draw={drawCalendar} color={getColor()} />
                {date
                    ? format.dateReverse(date)
                    : type === 'left' ? format.defaultValues.start : format.defaultValues.end}
            </InputContent>

        </InputContainer>
    );
}

export default Input;
