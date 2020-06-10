import {gameActions} from "../game.actions";
import {connect} from "react-redux";
import {SetupScreen} from "../components/SetupScreen";

const mapStateToProps = (state, ownProps) => ({
    userId            :   state.session.user.id,
    roomId            :   state.session.game.id,
    hasSent           :   state.game.hasSent,
    boardsReady       :   state.game.boardsReady,
});

const mapDispatchToProps = dispatch => ({
    updateDisposition: (positions) => {
        dispatch(gameActions.updateDisposition(positions))
    },
    sendBoard:(roomId, board, userId) => {
        dispatch(gameActions.sendBoard(roomId, board, userId));
    },
    gameStarted:(ownBoard, opponentBoard) => {
        dispatch(gameActions.gameStarted(ownBoard, opponentBoard));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupScreen);
