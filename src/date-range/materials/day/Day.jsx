import { DayContainer, DayContent } from './Day.styled';
import { navigation } from '../global/theme';

/**
 * Composant UI
 *
 * Représente un jour du calendrier
 * En fonction des props, il possède deux styles différents et peut-être séléctionnable ou non
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function Day(props) {
    const {
        enable, value, getDate, getDateAcces, getSelectedDay,
    } = props;
    const type = getSelectedDay(value);

    return (
        <DayContainer
            tabIndex={enable ? navigation.tabIndex : undefined}
            onClick={enable ? (e) => getDate(e, value) : undefined}
            onKeyDown={enable ? (e) => getDateAcces(e, value) : undefined}
            enable={enable}
            type={type}
        >
            <DayContent
                enable={enable}
                type={type}
            >
                {value}
            </DayContent>
        </DayContainer>

    );
}

export default Day;
