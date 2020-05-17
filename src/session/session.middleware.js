import {GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_RESPONSE,} from "./session.actions";
import actions from "../index";
import {services} from "./session.services";


const sessionMiddleware = ({ dispatch, getState }) => next => {
    return action => {
        next(action);
        switch (action.type) {
            case GOOGLE_LOGIN_RESPONSE:
                services.backEndLogin(action.response.tokenId)
                    .then((res) => {
                        dispatch(actions.session.backEndResponse(res));
                    })
                    .catch(error => {
                        dispatch(actions.session.backEndLoginError(error));
                    });
                break;
            case GOOGLE_LOGIN_ERROR:
                console.log(action);
                break;
            default:
                // break;
        }
    };
};

export default sessionMiddleware;