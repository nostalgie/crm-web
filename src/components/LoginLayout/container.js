import { connect } from 'react-redux';
import { login } from 'actions/user';
import LoginLayout from 'components/LoginLayout';

const mapStateToProps = state => ({
  isLoggingIn: state.user.isLoggingIn,
});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginLayout);
