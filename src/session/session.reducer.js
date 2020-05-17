import {BACKEND_LOGIN_ERROR, BACKEND_LOGIN_RESPONSE} from "./session.actions";

const initialState = {
    token       : undefined,
    user        : {},
    isLoggedIn  : false,
    loginStatus: {
        success: false,
        error: false
    }
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
        default:
            return state
    }
};

export default session;

