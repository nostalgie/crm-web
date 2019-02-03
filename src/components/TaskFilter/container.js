import { connect } from "react-redux";
import TaskFilter from "components/TaskFilter";

const mapStateToProps = state => ({
  currentRole: state.user.role,
  customers: state.customers.customers
});

export default connect(mapStateToProps)(TaskFilter);
