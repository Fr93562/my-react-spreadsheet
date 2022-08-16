/**
 * Renvoie true si la presse utilisée corresponds à celle attendue
 *
 * @param {*} event : js object
 * @param {*} key : string - touche attendue
 * @returns : boolean - true si correspondance
 */
function keyPress(event, key) {
    let response = false;

    if (event.key && event.key === key) {
        response = true;
    }
    return response;
}

const action = {
    keyPress,
};

export default action;
