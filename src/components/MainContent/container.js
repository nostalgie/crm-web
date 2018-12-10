import { connect } from "react-redux";
import MainContent from "components/MainContent";

const mapStateToProps = state => ({
  currentRole: state.user.role
});

export default connect(mapStateToProps)(MainContent);
