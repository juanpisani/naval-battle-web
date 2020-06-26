import {gameActions} from "../game.actions";
import {connect} from "react-redux";
import {SetupScreen} from "../components/SetupScreen/SetupScreen";

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
    gameStarted:(ownCells, ownShips, opponentCells) => {
        dispatch(gameActions.gameStarted(ownCells, ownShips, opponentCells));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupScreen);
