export const GOOGLE_LOGIN_RESPONSE = "GOOGLE_LOGIN_RESPONSE";
export const GOOGLE_LOGIN_ERROR = "GOOGLE_LOGIN_ERROR";

export const BACKEND_LOGIN_ERROR = "BACKEND_LOGIN_ERROR";
export const BACKEND_LOGIN_RESPONSE = "BACKEND_LOGIN_RESPONSE";

export const REGISTER_TO_PLAY_REQUEST = "REGISTER_TO_PLAY_REQUEST";
export const REGISTER_TO_PLAY_RESPONSE = "REGISTER_TO_PLAY_RESPONSE";
export const REGISTER_TO_PLAY_ERROR = "REGISTER_TO_PLAY_ERROR";

export const START_GAME= "START_GAME";

export const sessionActions = {

    loginGoogleResponse: (response) => ({type: GOOGLE_LOGIN_RESPONSE, response: response}),
    loginGoogleError: () => ({type: GOOGLE_LOGIN_ERROR}),

    backEndLoginError: (error) => ({type: BACKEND_LOGIN_ERROR, error: error}),
    backEndResponse: (response) => ({type: BACKEND_LOGIN_RESPONSE, response: response}),

    registerToPlayRequest: (token) =>  ({type: REGISTER_TO_PLAY_REQUEST, token: token}),
    registerToPlayResponse: (response) =>  ({type: REGISTER_TO_PLAY_RESPONSE, response: response}),
    registerToPlayError: (error) =>  ({type: REGISTER_TO_PLAY_ERROR, error: error}),

    startGame: (playerOne, playerTwo) => ({type: START_GAME, playerOne: playerOne, playerTwo: playerTwo}),
};