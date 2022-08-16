/* eslint-disable no-plusplus */
/**
 * Calcule le jour de la semaine où le 1ier du mois commmence
 *
 * @param {*} year : integer - année du mois visé
 * @param {*} month : integer - mois visé
 * @returns : integer - numéro du jour du début du mois
 */
function getStartMonth(year, month) {
    let response = new Date(year, month).getDay();

    if (response === 0) {
        response = 7;
    }

    return response;
}

/**
 * Calcule le nombre de jour dans le mois
 *
 * @param {*} year : integer - année du mois visé
 * @param {*} month : integer - mois visé
 * @returns : integer - numéro du jour du début du mois
 */
function getDaysNumber(year, month) {
    const reference = 40;
    const overflow = new Date(year, month, reference).getDate();
    return reference - overflow;
}

/**
 * Génère un calendrier virtuel
 * Les espaces vides correspondent aux jours du mois précédents
 * Les nombres correspondent aux dates
 *
 * @param {*} year : integer - année du mois visé
 * @param {*} month : integer - mois visé
 * @returns : array - composé de string vide et d'integer
 */
function calendar(year, month) {
    const monthStart = getStartMonth(year, month - 1);
    const monthPeriod = getDaysNumber(year, month - 1);
    const currentCalendar = [];

    for (let i = 1; i < monthStart; i++) {
        currentCalendar.push('');
    }

    for (let i = 1; i <= monthPeriod; i++) {
        currentCalendar.push(i);
    }

    if (currentCalendar.length % 7 !== 0) {
        const max = (currentCalendar.length + 7) - (currentCalendar.length % 7);
        const rest = max - currentCalendar.length;

        for (let i = 0; i < rest; i++) {
            currentCalendar.push('');
        }
    }
    return currentCalendar;
}

/**
 * Récupère l'année actuelle
 * @returns : integer - année actuelle
 */
function currentYear() {
    return new Date().getFullYear();
}

/**
 * Récupère le mois actuel
 * @returns : integer - mois actuel
 */
function currentMonth() {
    return new Date().getMonth() + 1;
}

/**
 * Récupère le jour actual
 * @returns : integer - jour actuel
 */
function currentDay() {
    return new Date().getDate();
}

const date = {
    calendar,
    currentYear,
    currentMonth,
    currentDay,
};

export default date;
