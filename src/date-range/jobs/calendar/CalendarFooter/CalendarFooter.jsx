import Button from '../../../materials/button/Button';
import { FlexRowSpaced } from '../../../materials/global/container.styled';

/**
 * Représente le footer du calendrier ainsi que les boutons d'action
 *
 * Se base sur les props du composant CalendarBody pour calculer l'état des boutons
 * Le bouton reset est disponible à partir du moment où une seule date est séléctionnée
 * Le bouton submit est uniquement si les deux dates ont été séléctionné
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function CalendarFooter(props) {
    const {
        resetDate, submitDate, dateStart, dateEnd,
    } = props;

    /**
     * Indique si le bouton reset doit être séléctionnable
     * @returns - bool: true si séléctionnable
     */
    function enableReset() {
        let response = false;

        if (dateStart) {
            response = true;
        }
        return response;
    }

    /**
     * Indique si le bouton submit doit être séléctionnable
     * @returns - bool: true si séléctionnable
     */
    function enableSubmit() {
        let response = false;

        if (dateStart && dateEnd) {
            response = true;
        }
        return response;
    }

    return (
        <FlexRowSpaced>
            <Button type="minimalist" enable={enableReset} action={resetDate} label="Réinitialiser" />
            <Button type="full" enable={enableSubmit} action={submitDate} label="Valider la sélection" />
        </FlexRowSpaced>
    );
}

export default CalendarFooter;
