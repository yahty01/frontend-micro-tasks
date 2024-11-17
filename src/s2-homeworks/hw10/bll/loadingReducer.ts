const initState = {
    isLoading: false,
}

export type InitialState = {
    isLoading: boolean
}

export const loadingReducer = (state: InitialState = initState, action: LoadingActionType): InitialState => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
