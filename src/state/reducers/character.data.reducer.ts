const characterReducer = (state={characters: []}, action: any) => {
    switch(action.type) {
        case 'ADD_CHARACTER':
            return Object.assign({}, state,
                {
                    characters: [...state.characters, action.characters]
                });
            default:
                return state
    }
}

export default characterReducer