import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTicketInfo, addUpdate, completeTicket, rateTicket } from 'actions/tickets'
import TicketFull from 'components/TicketFull'

const mapStateToProps = state => ({
  ticketInfo: state.tickets.fullTicket
})

const mapDispatchToProps = {
  addUpdate,
  completeTicket,
  rateTicket,
  getTicketInfo
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TicketFull)
)
