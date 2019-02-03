import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MainContent from 'components/MainContent'

const mapStateToProps = state => ({
  currentRole: state.user.role
})

export default withRouter(connect(mapStateToProps)(MainContent))
