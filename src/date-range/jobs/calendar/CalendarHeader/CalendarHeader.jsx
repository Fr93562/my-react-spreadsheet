import Input from '../../../materials/input/Input';
import { FlexRow } from '../../../materials/global/container.styled';

/**
 * Représente le header calendrier
 * Affiche les inputs avec les dates courantes
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function CalendarHeader(props) {
    const { dateStart, dateEnd, highlight } = props;

    return (
        <>
            <FlexRow>
                <Input type="left" date={dateStart} highlight={highlight} />
                <Input type="right" date={dateEnd} highlight={highlight} />
            </FlexRow>
        </>

    );
}

export default CalendarHeader;
