export const GOOGLE_LOGIN_RESPONSE = "GOOGLE_LOGIN_RESPONSE";
export const GOOGLE_LOGIN_ERROR = "GOOGLE_LOGIN_ERROR";


export const BACKEND_LOGIN_ERROR = "BACKEND_LOGIN_ERROR";
export const BACKEND_LOGIN_RESPONSE = "BACKEND_LOGIN_RESPONSE";


export const sessionActions = {

    loginGoogleResponse: (response) => ({type: GOOGLE_LOGIN_RESPONSE, response: response}),
    loginGoogleError: () => ({type: GOOGLE_LOGIN_ERROR}),

    backEndLoginError: (error) => ({type: BACKEND_LOGIN_ERROR, error}),
    backEndResponse: (response) => ({type: BACKEND_LOGIN_RESPONSE, response}),

}