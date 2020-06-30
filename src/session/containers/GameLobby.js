import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import GameLobbyScreen from "../components/GameLobbyScreen/GameLobbyScreen";
import {sessionActions} from "../session.actions";
import {gameActions} from "../../game/game.actions";

const mapStateToProps = (state, ownProps) => ({
    user                 :   state.session.user,
    gameId               :   state.session.game.id,
    isLoggedIn           :   state.session.isLoggedIn,
    registerToPlayStatus :   state.session.registerToPlayStatus,
    opponentReady        :   state.session.game.opponentReady,
    playerOne            :   state.session.game.playerOne,
    playerTwo            :   state.session.game.playerTwo,
    socket               :   state.session.socket,
});

const mapDispatchToProps = dispatch => ({
    startGame:(playerOne, playerTwo, gameId) => {
        dispatch(sessionActions.startGame(playerOne, playerTwo, gameId));
    },
    isWinner: (result) => {
        dispatch(gameActions.isWinner(result));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameLobbyScreen));