import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import Input from "components/Input";
import { validate } from "utils/validators";

const LoginForm = props => {
  const { handleSubmit, error } = props;
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        name="username"
        id="username"
        placeholder="Введите имя пользователя"
        label="Имя пользователя"
      />
      <Input
        name="password"
        id="password"
        type="password"
        placeholder="Введите пароль"
        label="Пароль"
      />
      {error && <div className="text-danger">{error}</div>}
      <button type="submit">Войти</button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "login",
  validate
})(LoginForm);
