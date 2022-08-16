/**
 * @uneused
 * Indique le nombre de colonne à afficher par ligne
 * @param {array} structure 
 * @returns - integer
 */
function getColmnNumber(structure) {
    return structure.length;
}

/**
 * Récupère l'élément ciblé dans les données du tableau
 * @param {string} sort 
 * @param {object} element 
 * @returns 
 */
 function getSortBy(sort, element) {
    const sortArray = sort.split(',');
    let response =  element[sortArray[0]];

    if (sortArray.length > 1) {
        for (let i = 1; i < sortArray.length; i++) {

            if(sortArray[i]) {
                response = response[sortArray[i]];
            }
        }
    }
    return response;
}

function addFilter(structure, data) {
    const { idBy, columns } = structure;
    let response = [];

    for (let i = 0; i < data.length; i++) {
        const line = {
            id: getSortBy(idBy, data[i]),
            filters: [],
        };
        response.push(line);

        for (let z = 0; z < columns.length; z++) {
            let filter = getSortBy(columns[z].linkTo, data[i]);
            response[i].filters.push(filter);
        }
    }
    return response;
}

const table = {
    getColmnNumber: getColmnNumber,
    getSortBy: getSortBy,
    addFilter: addFilter,
};

export default table;