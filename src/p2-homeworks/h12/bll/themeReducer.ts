const initState = {
    theme: {
        color: 'some'
    }
};

type ActionType = ReturnType<typeof changeThemeC>


export const themeReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case "SET_THEME": {
            return {...state, theme: {color: action.payload}};
        }
        default:
            return state;
    }
};

type changeThemeCType = {
    type: "SET_THEME"
    payload: string
}

export const changeThemeC = (payload: string): changeThemeCType => {
    return {
        type: "SET_THEME",
        payload: payload
    } as const
}; // fix any