import {connect} from "react-redux";
import ResultScreen from "../components/ResultScreen/ResultScreen";
import withRouter from "react-router-dom/es/withRouter";
import {sessionActions} from "../../session/session.actions";

const mapStateToProps = (state, ownProps) => ({
    user              :   state.session.user,
    gameId            :   state.session.game.id,
    isWinner          :   state.game.isWinner,
    isLoggedIn        :   state.session.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    deleteGameRoomAndSocket: () => {
    dispatch(sessionActions.deleteGameRoomAndSocket());
}
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResultScreen));
