import {connect} from "react-redux";
import ResultScreen from "../components/ResultScreen/ResultScreen";
import withRouter from "react-router-dom/es/withRouter";
import {sessionActions} from "../../session/session.actions";
import {gameActions} from "../game.actions";

const mapStateToProps = (state, ownProps) => ({
    user              :   state.session.user,
    socket            :   state.session.socket,
    gameId            :   state.session.game.id,
    isWinner          :   state.game.isWinner,
    isLoggedIn        :   state.session.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    deleteGameRoomAndSocket: () => {
        dispatch(sessionActions.deleteGameRoomAndSocket());
    },
    startGame:(playerOne, playerTwo, gameId) => {
        dispatch(sessionActions.startGame(playerOne, playerTwo, gameId));
    },
    deletePreviousGameInfo:() => {
        dispatch(gameActions.deletePreviousGameInfo());
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResultScreen));
