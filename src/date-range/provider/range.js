/**
 * Renvoie l'année précédente
 * @returns - integer: année précédente
 */
function min() {
    return new Date().getFullYear() - 1;
}

const range = {
    min,
};

export default range;
