import Input from '../../materials/input/Input';
import { navigation } from '../../materials/global/theme';
import { FlexRow } from '../../materials/global/container.styled';

/**
 * Représente l'input du formulaire
 * Un clic / presser la touche entrée sur l'input provoque l'ouverture du calendrier
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function FormDate(props) {
    const {
        action, handleOpen, dateStart, dateEnd,
    } = props;

    return (
        <FlexRow tabIndex={navigation.tabIndex} onClick={action} onKeyDown={handleOpen}>
            <Input type="left" date={dateStart} highlight="" pointer />
            <Input type="right" date={dateEnd} highlight="" pointer />
        </FlexRow>
    );
}

export default FormDate;
