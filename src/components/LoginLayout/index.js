import React, { PureComponent } from "react";
import { SubmissionError } from "redux-form";
import PropTypes from "prop-types";
import LoginForm from "components/LoginForm";

import "./styles.scss";

class LoginLayout extends PureComponent {
  handleSubmit = async values => {
    const { username, password } = values;

    await this.props.login(username, password);

    const { loginError } = this.props;
    if (loginError) {
      throw new SubmissionError({
        _error: loginError
      });
    }
  };

  render() {
    return (
      <section className="login pt-5 mx-auto">
        <LoginForm onSubmit={this.handleSubmit} />
      </section>
    );
  }
}

LoginLayout.propTypes = {
  isLoggingIn: PropTypes.bool,
  username: PropTypes.string,
  login: PropTypes.func,
  loginError: PropTypes.string
};

export default LoginLayout;
