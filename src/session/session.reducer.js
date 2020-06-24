import {
    BACKEND_LOGIN_ERROR,
    BACKEND_LOGIN_RESPONSE,
    REGISTER_TO_PLAY_ERROR,
    REGISTER_TO_PLAY_REQUEST,
    REGISTER_TO_PLAY_RESPONSE,
    START_GAME
} from "./session.actions";

const initialState = {
    token: undefined,
    user: {},
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
    // game: {
    //     id: "",
    //     opponentReady: false,
    //     playerOne: {
    //         id: "",
    //         email: "",
    //     },
    //     playerTwo: {
    //         id: "",
    //         email: "",
    //     }
    // }
    game: {
        id: "999999",
        opponentReady: true,
        playerOne: {
            id: "10000",
            email: "player1@mail.com",
        },
        playerTwo: {
            id: "10001",
            email: "player2@mail.com",
        }
    },
};

const session = (state = initialState, action) => {
    switch (action.type) {
        case BACKEND_LOGIN_RESPONSE:
            const user = action.response.data.user;
            return {
                ...state,
                token: action.response.data.token,
                user:{
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email,
                    id: user.id
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
        case REGISTER_TO_PLAY_REQUEST:
        case REGISTER_TO_PLAY_RESPONSE:
        case REGISTER_TO_PLAY_ERROR:
            return {
                ...state,
                registerToPlayStatus: {
                    success : action.type === REGISTER_TO_PLAY_RESPONSE,
                    error   : action.type === REGISTER_TO_PLAY_ERROR && action.error,
                    loading : action.type === REGISTER_TO_PLAY_REQUEST
                },
                game: {id : action.type === REGISTER_TO_PLAY_RESPONSE && action.response.data.game_session_id},
            };
        case START_GAME:
            debugger;
            return {
                ...state,
                game:{
                    ...state.game,
                    opponentReady: true,
                    playerOne: action.playerOne,
                    playerTwo: action.playerTwo,
                }
            };


        default:
            return state
    }
};

export default session;

