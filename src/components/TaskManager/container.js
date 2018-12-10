import { connect } from "react-redux";
import { getTickets } from "actions/tickets";
import TaskManager from "components/TaskManager";

const mapStateToProps = state =>({
  tickets: state.tickets.tickets,
  ticketsRequestError: state.tickets.error
});

const mapDispatchToProps = {
  getTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskManager);
