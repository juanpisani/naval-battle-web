import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import HomeScreen from "../components/HomeScreen/HomeScreen";
import {sessionActions} from "../session.actions";

const mapStateToProps = (state, ownProps) => ({
    user            :   state.session.user,
    token           :   state.session.token,
    isLoggedIn      :   state.session.isLoggedIn,
    registerToPlayStatus :   state.session.registerToPlayStatus,
    socket          :   state.session.socket,
    stats         :   state.session.stats,
});

const mapDispatchToProps = dispatch => ({
    saveSocketInReducer: (socket) => {
        dispatch(sessionActions.saveSocketInReducer(socket));
    },
    logout: () => {
        dispatch(sessionActions.logout());
    },
    getMyStatsRequest: () => {
        dispatch(sessionActions.getMyStatsRequest());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeScreen));