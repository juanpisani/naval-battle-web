import {connect} from "react-redux";
import {GameScreen} from "../components/GameScreen/GameScreen";

const mapStateToProps = (state, ownProps) => ({
    isLoggedIn        :   state.session.isLoggedIn,
    userId            :   state.session.user.id,
    ownCells          :   state.game.ownCells,
    opponentCells     :   state.game.opponentCells,
    socket            :   state.session.socket,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
