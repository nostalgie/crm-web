import { connect } from 'react-redux'
import TicketButtonGroup from 'components/TicketButtonGroup'

const mapStateToProps = state => ({
  role: state.user.role
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketButtonGroup)
