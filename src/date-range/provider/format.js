/**
 * Constantes de la librairie, sert à l'affichage
 */
const defaultValues = { start: 'Date de début', end: 'Date de fin' };
const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const months = [
    'Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

/**
 * Rajoute un 0 aux nombres inférieurs à 10.
 * Aide à la génération des objets dates
 *
 * @param {*} date : integer - partie de la date à traiter
 * @returns
 */
function dateRender(date) {
    let response = date;

    if (date < 10) {
        response = `0${date}`;
    }
    return response;
}

/**
 * Inverse les paramètres d'une date
 *
 * @example: AAAA/MM/JJ devient JJ/MM/AAAA
 * @param {*} date : string: date à manipuler
 * @returns date: string à utiliser
 */
function dateReverse(date) {
    const array = date.split('-');
    const reverseArray = array.reverse();
    const response = reverseArray.join('-');

    return response;
}

/**
 * Décompose un objet date en array
 * @param {*} date : string à décomposer
 * @returns array de taille 3: contient l'AAAA/MM/JJ
 */
function dateToArray(date) {
    const array = (date.split('-')).reverse();
    const response = [parseInt(array[0], 10), parseInt(array[1], 10), parseInt(array[2], 10)];

    return response;
}

const format = {
    defaultValues,
    days,
    months,
    dateReverse,
    dateToArray,
    dateRender,
};

export default format;
