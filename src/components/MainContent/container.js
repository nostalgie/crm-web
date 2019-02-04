import { connect } from 'react-redux'
import { getCustomers } from 'actions/customers'
import { createTicket } from 'actions/tickets'
import { withRouter } from 'react-router-dom'
import MainContent from 'components/MainContent'

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  getCustomers,
  createTicket
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainContent)
)
