import {connect} from "react-redux";
import {GameScreen} from "../components/GameScreen";

const mapStateToProps = (state, ownProps) => ({
    userId            :   state.session.user.id,
    ownBoard          :   state.game.ownBoard,
    opponentBoard     :   state.game.opponentReady,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
