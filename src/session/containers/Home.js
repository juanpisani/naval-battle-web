import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import HomeScreen from "../components/HomeScreen/HomeScreen";

const mapStateToProps = (state, ownProps) => ({
    user            :   state.session.user,
    isLoggedIn      :   state.session.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeScreen));