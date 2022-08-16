/* eslint-disable no-plusplus */
import CalendarCell from '../CalendarCell/CalendarCell';
import { TableRow } from '../../../../materials/global/table.styled';

/**
 * Représente une ligne du body du calendrier
 *
 * Une ligne est composée de 7 cellules
 * Il fournit ensuite ce calendrier virtuel aux composants CalendarCell pour générer les cellules dynamiquement
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function CalendarRow(props) {
    const {
        setDate, dateStart, dateEnd, selectedYear, selectedMonth, days, increment,
    } = props;

    /**
     * Construit une ligne de 7 CalendarCell à partir du calendrier virtuel
     *
     * @param {*} day - array of string: calendrier virtuel
     * @param {*} position - integer: numéro de semaine
     * @returns - jsx objects: éléments à afficher
     */
    function getCells(day, position) {
        const cells = [];

        for (let i = position; i < position + 7; i++) {
            const cell = (
                <CalendarCell
                    key={`m-calendar-cell-${i}`}
                    setDate={setDate}
                    position={i}
                    days={day}
                    selectedYear={selectedYear}
                    selectedMonth={selectedMonth}
                    dateStart={dateStart}
                    dateEnd={dateEnd}
                />
            );

            cells.push(cell);
        }

        return cells;
    }

    return (
        <TableRow>
            {getCells(days, increment)}
        </TableRow>
    );
}

export default CalendarRow;
