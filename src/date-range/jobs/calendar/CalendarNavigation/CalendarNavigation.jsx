import date from '../../../provider/date';
import range from '../../../provider/range';
import format from '../../../provider/format';
import Navigation from '../../../materials/navigation/Navigation';
import { Legend } from '../../../materials/global/content.styled';
import { FlexRowSpaced } from '../../../materials/global/container.styled';

/**
 * Représente la navigation du calendrier. Il se positionne juste après le header
 * Il se base sur le props du mois/ année actuellement utilisée
 * Il compare ces props à la date minimale et maximale autorisée
 * En fonction de ces conditions, des valeurs différentes sont envoyés aux composants UI
 *
 * @param {*} props - any: props reçu du composant dateRange
 * @returns - jsx objects: éléments à afficher
 */
function CalendarNavigation(props) {
    const {
        selectedYear, selectedMonth, setSelectedYear, setSelectedMonth,
    } = props;
    const month = format.months[selectedMonth - 1];

    function previousMonth() {
        if (selectedMonth === 1) {
            setSelectedYear(selectedYear - 1);
            setSelectedMonth(12);
        } else {
            setSelectedMonth(selectedMonth - 1);
        }
    }

    function nextMonth() {
        if (selectedMonth === 12) {
            setSelectedYear(selectedYear + 1);
            setSelectedMonth(1);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }
    }

    function getMinRange() {
        let enable = true;
        const actualMonth = date.currentMonth();
        const minRange = range.min();

        if (actualMonth === selectedMonth && minRange === selectedYear) {
            enable = false;
        }
        return enable;
    }

    function getMaxRange() {
        let enable = true;
        const actualYear = date.currentYear();
        const actualMonth = date.currentMonth();

        if (actualMonth === selectedMonth && actualYear === selectedYear) {
            enable = false;
        }
        return enable;
    }

    return (
        <FlexRowSpaced>
            <Navigation type="before" enable={getMinRange} action={previousMonth} />
            <Legend>
                {`${month} ${selectedYear}`}
            </Legend>
            <Navigation type="next" enable={getMaxRange} action={nextMonth} />
        </FlexRowSpaced>
    );
}

export default CalendarNavigation;
