
function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues)
}


const initialState={
        totalObjectsByDepartment:null,
        cards:[],
        details:{},
 };

export default function reducer(state=initialState,action) {
    switch (action.type) {
        case 'total-objects': return updateObject(state,{
            totalObjectsByDepartment:action.totalObjectsByDepartment,
            cards:[],
        });

        case 'set-card':
            return updateObject(state,{
                    cards:state.cards.concat(action.card),
        });
        case 'set-details':
            return updateObject(state,{
                details: action.details,
        });
        default: return state;
    }

}
