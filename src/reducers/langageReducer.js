//Reducer for character information Initialize State
const initState = {
    name: "Sunny Xue",
    option: [
        {
            id: 1,
            content: 'Francais'
        }, {
            id: 2,
            content: 'Anglais'
        }, {
            id: 3,
            content: 'Chinois'
        }
    ],
    selected: 1,
    choix:null
}

//Define Actions
const langageReducer = (state = initState, action) => {
    switch (action.type) {
            //Change character name
        case 'CHANGE_SELECTED':
            console.log(state.selected)

            return {
                ...state,
                selected: action.payload
            }

        case 'CHANGE_CHOIX':
            return {
                ...state,
                choix: action.payload
            }
        case 'CHANGE_AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
            return state
    }
}

export default langageReducer;