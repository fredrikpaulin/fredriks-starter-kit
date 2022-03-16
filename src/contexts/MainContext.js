import {createContext, useReducer} from 'react'

const initialState = {
    loading: false,
}

const Reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_LOADING':
            return {
                ...state,
                loading: !state.loading
            }
        default: return {...state}
    }
}

export const MainStore = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return(
        <MainContext.Provider value={[state, dispatch, fb]}>
            {children}
        </MainContext.Provider>
    )
}

export const MainContext = createContext(initialState)
export default MainStore