import {gameActions} from "../game.actions";
import {connect} from "react-redux";
import {SetupScreen} from "../components/SetupScreen/SetupScreen";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    userId            :   state.session.user.id,
    gameId            :   state.session.game.id,
    socket            :   state.session.socket,
    isLoggedIn        :   state.session.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    updateDisposition: (positions) => {
        dispatch(gameActions.updateDisposition(positions))
    },
    gameStarted:(ownCells, opponentCells) => {
        dispatch(gameActions.gameStarted(ownCells, opponentCells));
    },
    isWinner: (result) => {
        dispatch(gameActions.isWinner(result));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SetupScreen));
