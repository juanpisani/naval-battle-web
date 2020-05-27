import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {sessionActions} from "../session.actions";
import SetPiecesScreen from "../components/SetPiecesScreen/SetPiecesScreen";

const mapStateToProps = (state, ownProps) => ({
    user            :   state.session.user,
    roomId          :   state.session.game.id,
    isLoggedIn      :   state.session.isLoggedIn,
    playerOne       :   state.session.game.playerOne,
    playerTwo       :   state.session.game.playerTwo
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SetPiecesScreen));