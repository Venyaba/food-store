import {
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_ERROR,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
} from "./sessionTypes"


export const signUpRequest = ()=>({
    type:SIGN_UP_REQUEST
})


export const signUpSuccess = data =>({
    type:SIGN_UP_SUCCESS,
    payload: data
})

 export const signUpError = error=>({
    type:SIGN_UP_ERROR,
    payload: {
        error
    }
})


export const signInRequest = ()=>({
    type:SIGN_IN_REQUEST
})


export const signInSuccess = response =>({
    type:SIGN_IN_SUCCESS,
    payload: response
})

export const signInError = error=>({
    type:SIGN_IN_ERROR,
    payload: {
        error
    }
})

export const signOutRequest = ()=>({
    type: SIGN_OUT_REQUEST
})

export const signOutSuccess = () =>({
    type: SIGN_OUT_SUCCESS
})