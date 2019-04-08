import {actionTypes} from './actions'
import {token} from '../baseUrl'

const initialState = {
    userEmail: '',
    isAuthenticated: !!token,
    token: null
}

export const signUser = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SIGN_UP_SUCCESS:
            return {...state}
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                userEmail: payload.data.session.email,
                isAuthenticated: true,
                token: payload.data.session.jwt
            }
        case actionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                userEmail: '',
                isAuthenticated: false,
                token: null
            }

        case actionTypes.SIGN_UP_ERROR:
        case actionTypes.SIGN_IN_ERROR:
            return {
                ...state,
                userEmail: '',
                isAuthenticated: false,
                token: null
            }
        default:
            return state
    }
}
