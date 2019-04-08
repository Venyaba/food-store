import {combineReducers} from "redux"
import {
    SIGN_UP_ERROR,
    SIGN_UP_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_OUT_SUCCESS
} from "./sessionTypes";

const user = (state = null,{type,payload})=>{
    switch (type) {
        case SIGN_UP_SUCCESS:
        case SIGN_IN_SUCCESS:
            return payload.user

        case SIGN_OUT_SUCCESS:
            return null
        default:
            return state
    }
}


const isAuthenticated = (state = false,{type,payload})=>{
    switch (type) {
        case SIGN_UP_SUCCESS:
        case SIGN_IN_SUCCESS:
            return true;

        case SIGN_UP_ERROR:
        case SIGN_IN_ERROR:
        case SIGN_OUT_SUCCESS:
            return false;

        default:
            return state;
    }
}

const token = (state=null,{type,payload})=>{
    switch (type) {
        case SIGN_UP_SUCCESS:
        case SIGN_IN_SUCCESS:
            return payload.token

        case SIGN_UP_ERROR:
        case SIGN_IN_ERROR:
        case SIGN_OUT_SUCCESS:
            return null

        default:
            return state

    }
}


export default combineReducers({
    user,
    isAuthenticated,
    token
})
