import {
    BACKEND_LOGIN_ERROR,
    BACKEND_LOGIN_RESPONSE,
    SAVE_SOCKET,
    START_GAME
} from "./session.actions";

const initialState = {
    token: undefined,
    user: {},
    socket: {},
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
    // game: {
    //     id: "999999",
    //     opponentReady: true,
    //     playerOne: {
    //         id: "10000",
    //         email: "player1@mail.com",
    //     },
    //     playerTwo: {
    //         id: "10001",
    //         email: "player2@mail.com",
    //     }
    // },
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
        default:
            return state
    }
};

export default session;

