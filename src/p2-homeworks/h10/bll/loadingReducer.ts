const initState = {
    isLoading: false
}

type actionType = loadingACType

export const loadingReducer = (state = initState, action: actionType): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type loadingACType = {
    type: 'LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): loadingACType => {
    return {
        type: 'LOADING',
        isLoading: isLoading
    } as const
} // fix any