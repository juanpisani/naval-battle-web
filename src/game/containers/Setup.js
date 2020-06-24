import {gameActions} from "../game.actions";
import {connect} from "react-redux";
import {SetupScreen} from "../components/SetupScreen";

const mapStateToProps = (state, ownProps) => ({
    userId            :   state.session.user.id,
    gameId            :   state.session.game.id,
    hasSent           :   state.game.hasSent,
    boardsReady       :   state.game.boardsReady,
    socket            :   state.session.socket,
    isLoggedIn      :   state.session.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    updateDisposition: (positions) => {
        dispatch(gameActions.updateDisposition(positions))
    },
    gameStarted:(ownBoard, opponentBoard) => {
        dispatch(gameActions.gameStarted(ownBoard, opponentBoard));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupScreen);
