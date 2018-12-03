import { connect } from "react-redux";
import AuthRoute from "../AuthRoute";

const mapStateToProps = state => ({
  token: state.user.authToken
});

export default connect(mapStateToProps)(AuthRoute);
