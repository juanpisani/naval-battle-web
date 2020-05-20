import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import GameLobbyScreen from "../components/GameLobbyScreen/GameLobbyScreen";
import {sessionActions} from "../session.actions";

const mapStateToProps = (state, ownProps) => ({
    user            :   state.session.user,
    roomId          :   state.session.game.id,
    isLoggedIn      :   state.session.isLoggedIn,
    registerToPlayStatus : state.session.registerToPlayStatus,
});

const mapDispatchToProps = dispatch => ({
    startGame:() => {
        dispatch(sessionActions.startGame());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameLobbyScreen));