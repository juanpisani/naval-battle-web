import {connect} from "react-redux";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import {sessionActions} from "../session.actions";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    user:   state.session.user,
    loginStatus: state.session.loginStatus
});

const mapDispatchToProps = dispatch => ({
    successLogin: (response) => {
        dispatch(sessionActions.loginGoogleResponse(response));
    },
    errorLogin: () => {
        dispatch(sessionActions.loginGoogleError());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginScreen));