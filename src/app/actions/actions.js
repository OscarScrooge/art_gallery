/**
 * @description action to get all the object of a department by id
 * @param totalObjectsByDepartment
 * @returns {{type: string, totalObjectsByDepartment: *}}
 */
export function totalObjectsIDs(totalObjectsByDepartment){
    return({
        type:"total-objects",
        totalObjectsByDepartment
    });
}

/**
 * @description action to set a card
 * @param object
 * @returns {{type: string, card: *}}
 */
export default function setCard(object){
    return({
        type:"set-card",
        card: object,
    });
}

/**
 *
 * @param details
 * @returns {{details: *}}
 */
export function setDetails(details) {
    return({
        type: "set-details",
        details,
    });
}

