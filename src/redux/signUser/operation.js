import axios from 'axios'

import {
  signUpError,
  signUpRequest,
  signUpSuccess,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess
} from './actions'

import {
  urlSignIn,
  urlSignUp,
  urlSignOut,
  token
} from '../baseUrl'
import {getDashboardListed} from "../dashboard/operation";


export const signUp = credentials => dispatch => {
  dispatch(signUpRequest())

  axios.post(urlSignUp, {user: credentials})
    .then(data => {
      return dispatch(signUpSuccess(data))
    })
    .catch(error => dispatch(signUpError(error)))
}

export const signIn = credentials => dispatch => {
  localStorage.clear()

  dispatch(signInRequest())

  axios.post(urlSignIn, credentials)
    .then(response => {
        localStorage.setItem('token', response.data.session.jwt)
        localStorage.setItem('email', response.data.session.email)
        return dispatch(signInSuccess(response))
      }
    )
    .then(resp => dispatch(getDashboardListed()))
    .catch(error => {

      return dispatch(signInError(error))
    })
}


export const signOut = () => (dispatch, getState) => {
  dispatch(signOutRequest())
  const actualToken = getState().session.token || token;

  const headerDefault = {Authorization: `Bearer ${actualToken}`}

  const options = {
    method: 'DELETE',
    headers: headerDefault,
    url: urlSignOut
  };

  axios(options)
    .then(() => {
      localStorage.clear()
      return dispatch(signOutSuccess())
    })
    .then(resp => dispatch(getDashboardListed()))
    .catch(error => console.log(error))
}