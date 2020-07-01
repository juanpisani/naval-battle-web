export const GOOGLE_LOGIN_RESPONSE = "GOOGLE_LOGIN_RESPONSE";
export const GOOGLE_LOGIN_ERROR = "GOOGLE_LOGIN_ERROR";

export const BACKEND_LOGIN_ERROR = "BACKEND_LOGIN_ERROR";
export const BACKEND_LOGIN_RESPONSE = "BACKEND_LOGIN_RESPONSE";

export const START_GAME = "START_GAME";
export const SAVE_SOCKET = "SAVE_SOCKET";

export const LOGOUT = "LOGOUT";
export const DELETE_GAME_ROOM_AND_SOCKET = "DELETE_GAME_ROOM_AND_SOCKET";

export const GET_MY_STATS_REQUEST = "GET_MY_STATS_REQUEST";
export const GET_MY_STATS_RESPONSE = "GET_MY_STATS_RESPONSE";

export const READY_WAS_CLICKED = "READY_WAS_CLICKED";

export const sessionActions = {

    loginGoogleResponse: (response) => ({type: GOOGLE_LOGIN_RESPONSE, response: response}),
    loginGoogleError: () => ({type: GOOGLE_LOGIN_ERROR}),

    backEndLoginError: (error) => ({type: BACKEND_LOGIN_ERROR, error: error}),
    backEndResponse: (response) => ({type: BACKEND_LOGIN_RESPONSE, response: response}),

    startGame: (playerOne, playerTwo, gameId) => ({type: START_GAME, playerOne: playerOne,
                                                   playerTwo: playerTwo, gameId: gameId}),
    saveSocketInReducer: (socket) => ({type: SAVE_SOCKET, socket: socket}),

    logout: () => ({type: LOGOUT}),
    deleteGameRoomAndSocket: () => ({type: DELETE_GAME_ROOM_AND_SOCKET}),

    getMyStatsRequest: () => ({type: GET_MY_STATS_REQUEST}),
    getMyStatsResponse: (response) => ({type: GET_MY_STATS_RESPONSE, response: response}),

    readyWasClicked: () => ({type: READY_WAS_CLICKED})
};