import format from '../../../../provider/format';
import { TableHeader, TableRow, TableParamCell } from '../../../../materials/global/table.styled';
import { Label } from '../../../../materials/global/content.styled';

/**
 * Représente la légende avec les jours de la semaine
 *
 * Il récupère les jours à afficher via le provider format.
 * Boucle ensuite les différents jours à afficher
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function CalendarLabel() {
    /**
     * Génère la liste de jours de la semaine
     * @returns - jsx objects: éléments à afficher
     */
    function getDayName() {
        return format.days.map((day) => (
            <TableParamCell key={`day-${day}`}>
                <Label>
                    {day}
                </Label>
            </TableParamCell>
        ));
    }

    return (
        <TableHeader>
            <TableRow>
                {getDayName()}
            </TableRow>
        </TableHeader>
    );
}

export default CalendarLabel;
