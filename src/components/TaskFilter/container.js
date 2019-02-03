import { connect } from "react-redux";
import { getTickets } from "actions/tickets";
import TaskFilter from "components/TaskFilter";

const mapStateToProps = state => ({
  currentRole: state.user.role
});

const mapDispatchToProps = {
  getTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskFilter);
