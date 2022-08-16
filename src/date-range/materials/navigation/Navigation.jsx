import { NavigationContainer, NavigationContent } from './Navigation.styled';
import drawLeftArrow from '../assets/drawLeftArrow';
import drawRightArrow from '../assets/drawRightArrow';
import Logo from '../Logo/Logo';
import { colors } from '../global/theme';

/**
 * Composant UI
 *
 * Représente un bouton de navigation
 * En fonction des props, il possède deux styles différents et peut-être séléctionnable ou non
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function Navigation(props) {
    const { type, enable, action } = props;
    const color = enable() ? colors.black : colors.grey;

    return (
        <NavigationContainer type={type}>
            <NavigationContent type="button" onClick={enable() ? action : undefined} enable={enable()}>
                { type === 'before' ? (
                    <>
                        <Logo draw={drawLeftArrow} color={color} />
                    </>
                ) : (
                    <>
                        <Logo draw={drawRightArrow} color={color} />
                    </>
                )}
            </NavigationContent>
        </NavigationContainer>
    );
}

export default Navigation;
