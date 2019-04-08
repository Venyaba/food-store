import axios from 'axios';
import {
  signUpError,
  signUpRequest,
  signUpSuccess,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
} from './sessionActions';

import { getToken } from './sessionSelectors';


export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  axios
    .post('http://localhost:4040/auth/signup', credentials)
    .then(({ data }) => {
      localStorage.setItem('token', data.token);

    return dispatch(signUpSuccess(data))
    })
    .catch(err => dispatch(signUpError(err)));

};



export const signIn = credentials => dispatch => {
  localStorage.clear()
  dispatch(signInRequest());
  axios
    .post('http://localhost:4040/auth/signin', credentials)
    .then(({ data }) => {
      localStorage.setItem('token', data.token)
     return dispatch(signInSuccess(data));
    })
    .catch(err => dispatch(signInError(err)));

};

export const signOut = () => (dispatch, getState) => {
   dispatch(signOutRequest());
  const token = localStorage.getItem('token')
  const actualToken = getToken(getState()) || token;

  const config ={
    headers:{
      Authorization:actualToken
    }
  }


  axios.post('http://localhost:4040/auth/signout',{},config)
    .then(() =>dispatch(signOutSuccess())
    )
};

