import { connect } from 'react-redux'
import LeftNavBar from 'components/LeftNavBar'

const mapStateToProps = state => ({
  customers: state.customers.customers
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavBar)
