import {GOOGLE_LOGIN_ERROR, GOOGLE_LOGIN_RESPONSE, REGISTER_TO_PLAY_REQUEST,} from "./session.actions";
import actions from "../index";
import {services} from "./session.services";
// import { push } from 'connected-react-router'


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
            case REGISTER_TO_PLAY_REQUEST:
                debugger;
                services.registerToPlay(action.token)
                    .then((response) => {
                        dispatch(actions.session.registerToPlayResponse(response));
                    })
                    .catch(error => {
                        dispatch(actions.session.registerToPlayError(error));
                    });
                break;
            default:
                // break;
        }
    };
};

export default sessionMiddleware;