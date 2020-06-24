import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import GameLobbyScreen from "../components/GameLobbyScreen/GameLobbyScreen";
import {sessionActions} from "../session.actions";

const mapStateToProps = (state, ownProps) => ({
    user            :   state.session.user,
    roomId          :   state.session.game.id,
    isLoggedIn      :   state.session.isLoggedIn,
    registerToPlayStatus : state.session.registerToPlayStatus,
    opponentReady   : state.session.game.opponentReady,
    playerOne       : state.session.game.playerOne,
    playerTwo       : state.session.game.playerTwo,
});

const mapDispatchToProps = dispatch => ({
    startGame:(playerOne, playerTwo) => {
        dispatch(sessionActions.startGame(playerOne, playerTwo));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameLobbyScreen));