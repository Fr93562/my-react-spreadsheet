import date from '../../../provider/date';
import CalendarRow from './CalendarRow/CalendarRow';
import CalendarLabel from './CalendarLabel/CalendarLabel';
import { FlexRow } from '../../../materials/global/container.styled';
import { TableBody, TableContainer } from '../../../materials/global/table.styled';

/**
 * Représente le body du calendrier
 * Ce composant génère un calendrier virtuel du mois/année reçu par les props
 * Il fournit ensuite ce calendrier virtuel aux composants enfants pour générer le tableau dynamiquement à l'aide de boucles
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function CalendarBody(props) {
    const {
        setDate, dateStart, dateEnd, selectedYear, selectedMonth,
    } = props;

    function getRows(year, month) {
        const days = date.calendar(year, month);
        const rows = [];

        for (let i = 0; i < days.length; i += 7) {
            const row = (
                <CalendarRow
                    key={`m-calendar-row-${i}`}
                    selectedMonth={month}
                    selectedYear={year}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                    setDate={setDate}
                    days={days}
                    increment={i}
                />
            );
            rows.push(row);
        }
        return rows;
    }

    return (
        <FlexRow>
            <TableContainer>
                <CalendarLabel />
                <TableBody>
                    {getRows(selectedYear, selectedMonth)}
                </TableBody>
            </TableContainer>
        </FlexRow>
    );
}

export default CalendarBody;
