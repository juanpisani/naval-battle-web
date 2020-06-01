import {gameActions} from "../game.actions";
import {sessionActions} from "../../session/session.actions";
import {connect} from "react-redux";
import {SetupScreen} from "../components/SetupScreen";

const mapStateToProps = (state, ownProps) => ({
    userId            :   state.session.user.id,
});

const mapDispatchToProps = dispatch => ({
    updateDisposition: (positions) => {
        dispatch(gameActions.updateDisposition(positions))
    },
    sendBoard:(board, userId) => {
        dispatch(sessionActions.sendBoard(board, userId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupScreen);
