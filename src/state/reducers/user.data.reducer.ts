const userReducer = (state={user: []}, action: any) => {
    switch(action.type) {
        case 'ADD_CHARACTER':
            return Object.assign({}, state,
                {
                    userData: [...state.user, action.user]
                });
            default:
                return state
    }
}

export default userReducer