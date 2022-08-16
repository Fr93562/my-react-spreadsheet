import date from '../../../../provider/date';
import range from '../../../../provider/range';
import action from '../../../../provider/action';
import format from '../../../../provider/format';
import { TableCell } from '../../../../materials/global/table.styled';
import Day from '../../../../materials/day/Day';

/**
 * Représente une cellule du calendrier
 * A partir des données reçues par le CalendarBody et CalendarRow, ce composant génère plusieurs états.
 * Il indique si une cellule est séléctionnable ou non.
 * Il calcule l'état de la cellule quand une variable est sélectionnée: start, range, end, alone
 * Ces états sont transmis au composant UI pour modifier son affichage.
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function CalendarCell(props) {
    const {
        setDate, dateStart, dateEnd, selectedYear, selectedMonth, days, position,
    } = props;

    /**
     * Construit un objet date
     * Utilise les props reçues pour déterminer le mois et l'année
     * Utiliser l'event js pour déterminer le jour
     *
     * @param {*} e - event js: cellule sélectionnée au clic / keypress
     * @param {*} day - any: jour correspondant. Généré au moment de la boucle de CalendarRow
     */
    function getDate(e, day) {
        const newDate = `${selectedYear}-${format.dateRender(selectedMonth)}-${format.dateRender(day)}`;
        setDate(newDate);
    }

    /**
     * Permet l'utilisation de getDate via l'accessibilité avec la touche Entrée
     *
     * @param {*} e - event js: cellule sélectionnée au clic / keypress
     * @param {*} day - any: jour correspondant. Généré au moment de la boucle de CalendarRow
     */
    function getDateAcces(e, day) {
        if (action.keyPress(e, 'Enter')) {
            getDate(e, day);
        }
    }

    /**
     * Calcule les jours séléctionnables
     *
     * @param {*} day - any: jour correspondant. Généré au moment de la boucle de CalendarRow
     * @returns - boolean: true si séléctionnable
     */
    function getEnableDays(day) {
        const actualYear = date.currentYear();
        const actualMonth = date.currentMonth();
        const minRange = range.min();
        let response = true;

        if (!day) {
            response = false;
        }
        if (minRange === selectedYear && actualMonth === selectedMonth && day < date.currentDay()) {
            response = false;
        }
        if (actualYear === selectedYear && actualMonth === selectedMonth && day > date.currentDay()) {
            response = false;
        }
        return response;
    }

    /**
     * Calcule si la cellule corresponds à dateStart ou dateEnd
     *
     * @param {*} day - any: jour correspondant. Généré au moment de la boucle de CalendarRow
     * @param {*} value - date: valeur utilisée comme référence
     * @param {*} result - string: valeur à donner si la condition est vérifiée
     * @returns
     */
    function getLimitDaySelected(day, value, result) {
        let response = '';

        if (day) {
            const dateBroken = format.dateToArray(value);

            if (dateBroken[0] === day && dateBroken[1] === selectedMonth && dateBroken[2] === selectedYear) {
                response = result;
            }
        }
        return response;
    }

    /**
     * Calcule si la cellule corresponds à une date entre dateStart et dateEnd
     * dateStart et dateEnd sont exclus de la condition
     *
     * @param {*} day - any: jour correspondant. Généré au moment de la boucle de CalendarRow
     * @returns - string: valeur à donner si la condition est vérifiée
     */
    function getRangeDaySelected(day) {
        let response = '';

        if (dateStart && dateEnd && day) {
            const dateStartBroken = format.dateToArray(dateStart);
            const dateEndBroken = format.dateToArray(dateEnd);

            if (dateStartBroken[1] === selectedMonth && dateEndBroken[1] === selectedMonth
                && dateStartBroken[2] === selectedYear && dateEndBroken[2] === selectedYear) {
                if (dateStartBroken[0] < day && dateEndBroken[0] > day) {
                    response = 'range';
                }
            } else {
                if (dateStartBroken[1] === selectedMonth
                    && dateStartBroken[2] === selectedYear
                    && dateStartBroken[0] < day) {
                    response = 'range';
                }

                if (dateEndBroken[1] === selectedMonth && dateEndBroken[2] === selectedYear && dateEndBroken[0] > day) {
                    response = 'range';
                }

                if ((dateStartBroken[1] < selectedMonth
                    && dateEndBroken[1] > selectedMonth)
                    && (dateStartBroken[2] === selectedYear
                    && dateEndBroken[2] === selectedYear)) {
                    response = 'range';
                }
            }
        }
        return response;
    }

    /**
     * Méthode qui va déterminer l'état de la cellule
     * Il vérifie de manière successive: date dé début, dates de milieu et date de fin ou date unique
     * @param {*} day - any: jour correspondant. Généré au moment de la boucle de CalendarRow
     * @returns - string: valeur à donner si la condition est vérifiée
     */
    function getSelectedDay(day) {
        let response = '';
        response = getLimitDaySelected(day, dateStart, 'start');

        if (!response) {
            response = getRangeDaySelected(day);
        }

        if (!response) {
            response = getLimitDaySelected(day, dateEnd, 'end');
        }

        if (dateStart && dateEnd && dateStart === dateEnd && response) {
            response = 'alone';
        }
        return response;
    }

    const enable = getEnableDays(days[position]);

    return (
        <TableCell>
            <Day
                enable={enable}
                value={days[position]}
                getDate={getDate}
                getDateAcces={getDateAcces}
                getSelectedDay={getSelectedDay}
            />
        </TableCell>
    );
}

export default CalendarCell;
