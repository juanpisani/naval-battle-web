import {
    BACKEND_LOGIN_ERROR,
    BACKEND_LOGIN_RESPONSE, LOGOUT,
    SAVE_SOCKET,
    START_GAME,
    DELETE_GAME_ROOM_AND_SOCKET,
    GET_MY_STATS_RESPONSE,
} from "./session.actions";

const initialState = {
    token: undefined,
    user: {},
    socket: {},
    stats: {
        wins: 0,
        loses: 0,
    },
    isLoggedIn: false,
    loginStatus: {
        success: false,
        error: false
    },
    registerToPlayStatus:{
        success: false,
        error: false,
        loading: false,
    },
    game: {
        id: "",
        opponentReady: false,
        playerOne: {
            id: "",
            email: "",
        },
        playerTwo: {
            id: "",
            email: "",
        }
    }
};

const session = (state = initialState, action) => {
    switch (action.type) {
        case BACKEND_LOGIN_RESPONSE:
            const user = action.response.data;
            return {
                ...state,
                token: action.response.data.token,
                user:{
                    name: user.name,
                    email: user.email,
                    id: user.user_id
                },
                loginStatus: {
                    success: true,
                    error: false
                },
                isLoggedIn: true
            };
        case BACKEND_LOGIN_ERROR:
            return {
                ...state,
                loginStatus: {
                    success: false,
                    error: true
                }
            };
        case START_GAME:
            return {
                ...state,
                game:{
                    ...state.game,
                    opponentReady: true,
                    playerOne: action.playerOne,
                    playerTwo: action.playerTwo,
                    id: action.gameId
                }
            };
        case SAVE_SOCKET:
            return{
                ...state,
                socket: action.socket
            };
        case LOGOUT:
            return{
                token: undefined,
                user: {},
                socket: {},
                stats: {
                    wins: 0,
                    loses: 0,
                },
                isLoggedIn: false,
                loginStatus: {
                    success: false,
                    error: false
                },
                registerToPlayStatus:{
                    success: false,
                    error: false,
                    loading: false,
                },
                game: {
                    id: "",
                    opponentReady: false,
                    playerOne: {
                        id: "",
                        email: "",
                    },
                    playerTwo: {
                        id: "",
                        email: "",
                    }
                }
            };
        case DELETE_GAME_ROOM_AND_SOCKET:
            return {
                ...state,
                socket: {},
                game: {
                    id: "",
                    opponentReady: false,
                    playerOne: {
                        id: "",
                        email: "",
                    },
                    playerTwo: {
                        id: "",
                        email: "",
                    }
                }
            };
        case GET_MY_STATS_RESPONSE:
            return {
                ...state,
                stats: {
                    wins: parseInt(action.response.data.wins),
                    loses: parseInt(action.response.data.loses)
                },
            };
        default:
            return state
    }
};

export default session;

