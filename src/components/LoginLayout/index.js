import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import LoginForm from "components/LoginForm";

import "./styles.scss";

class LoginLayout extends PureComponent {
  handleSubmit = values => {
    const { username, password } = values;
    this.props.login(username, password);
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
  login: PropTypes.func
};

export default LoginLayout;
