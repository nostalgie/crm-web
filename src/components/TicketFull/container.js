import { connect } from "react-redux";
import { addUpdate, completeTicket, rateTicket } from "actions/tickets";
import TicketFull from "components/TicketFull";

const mapStateToProps = state => ({
  currentRole: state.user.role
});

const mapDispatchToProps = {
  addUpdate,
  completeTicket,
  rateTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketFull);
