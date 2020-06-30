import {connect} from "react-redux";
import {GameScreen} from "../components/GameScreen/GameScreen";
import {gameActions} from "../game.actions";
import withRouter from "react-router-dom/es/withRouter";

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn        :   state.session.isLoggedIn,
    userId            :   state.session.user.id,
    gameId            :   state.session.game.id,
    ownCells          :   state.game.ownCells,
    opponentCells     :   state.game.opponentCells,
    socket            :   state.session.socket,
    x                 :   state.game.x,
    y                 :   state.game.y,
    isMyTurn          :   state.game.isMyTurn,
    isProcessingShot  :   state.game.isProcessingShot,
});

const mapDispatchToProps = dispatch => ({
    changeTurn: (isMyTurn) => {
        dispatch(gameActions.changeTurn(isMyTurn));
    },
    processingShot: (processingShot) => {
        dispatch(gameActions.processingShot(processingShot));
    },
    updateCells: (ownCells, opponentCells) => {
        dispatch(gameActions.updateCells(ownCells, opponentCells));
    },
    isWinner: (result) => {
        dispatch(gameActions.isWinner(result));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameScreen));
