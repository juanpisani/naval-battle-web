import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import {sessionActions} from "../session.actions";

const mapStateToProps = (state, ownProps) => ({
    user            :   state.session.user,
    token           :   state.session.token,
    isLoggedIn      :   state.session.isLoggedIn,
    registerToPlayStatus :   state.session.registerToPlayStatus,
});

const mapDispatchToProps = dispatch => ({
    registerToPlay: (token) => {
        dispatch(sessionActions.registerToPlayRequest(token));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeScreen));