import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTickets } from 'actions/tickets'
import TaskManager from 'components/TaskManager'

const mapStateToProps = state => ({
  tickets: state.tickets.tickets,
  ticketsRequestError: state.tickets.error
})

const mapDispatchToProps = {
  getTickets
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TaskManager)
)
