import { connect } from 'react-redux'
import { logout } from 'actions/user'
import Header from 'components/Header'

const mapDispatchToProps = {
  logout
}

export default connect(
  null,
  mapDispatchToProps
)(Header)
