import { ButtonContainer, ButtonContent } from './Button.styled';

/**
 * Composant UI
 *
 * Représente un bouton cliquable avec une action liée
 * En fonction des props, il possède deux styles différents et peut-être séléctionnable ou non
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function Button(props) {
    const {
        type, action, enable, label,
    } = props;

    return (
        <ButtonContainer enable={enable}>
            <ButtonContent type="button" role={type} onClick={enable() ? action : undefined} enable={enable()}>
                {label}
            </ButtonContent>
        </ButtonContainer>
    );
}

export default Button;
