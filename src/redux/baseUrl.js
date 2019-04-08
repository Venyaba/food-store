export const baseUrl = process.env.REACT_APP_SERVER_ORIGIN
export const token = localStorage.getItem('token')

export const urlSignIn = baseUrl + "/session";
export const urlSignUp = baseUrl + "/registration";
export const urlSignOut = baseUrl + "/session";