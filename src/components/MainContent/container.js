import { connect } from "react-redux";
import { getCustomers } from "actions/customers";
import { withRouter } from "react-router-dom";
import MainContent from "components/MainContent";

const mapStateToProps = state => ({
  currentRole: state.user.role
});

const mapDispatchToProps = {
  getCustomers
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainContent)
);
