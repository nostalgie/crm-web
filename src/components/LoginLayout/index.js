import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from 'components/LoginForm';

import './styles.scss';

class LoginLayout extends Component {
  handleSubmit = values => {
    this.props.login(...values);
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
  login: PropTypes.func,
};

export default LoginLayout;
