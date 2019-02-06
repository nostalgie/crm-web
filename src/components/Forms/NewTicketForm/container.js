import { connect } from 'react-redux'
import NewTicketForm from 'components/Forms/NewTicketForm'

const mapStateToProps = state => ({
  currentRole: state.user.role,
  customers: state.customers.customers
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTicketForm)
