// import { createStore } from 'react-redux'

let initialState = {
    login: null,
    password: null,
    isAuth: false
}

const authReducer = (state= initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state    
    }
}

// export const setAuthUser
