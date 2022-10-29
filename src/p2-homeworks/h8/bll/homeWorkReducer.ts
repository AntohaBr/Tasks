import {UserType} from "../HW8";

type stateType = Array<UserType>

type actionType ={
    type: 'sort' |'sort' | 'check'
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: stateType, action: actionType):stateType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload == "up"){
                return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
            }
            else if (action.payload == "down"){
                return [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
            }
            return [...state]
        }
        case 'check': {
            const newInitialState = state.filter(el=>el.age>= action.payload)
           return newInitialState
        }
        default: return state
    }
}