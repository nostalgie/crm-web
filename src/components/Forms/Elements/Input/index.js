import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import cn from 'classnames'
import { localizeError } from 'utils/localizers'

class Input extends React.PureComponent {
  renderInput = ({ input, meta: { touched, error } }) => {
    const { value, type = 'text', placeholder, id, label, className, showError = true } = this.props

    return (
      <div className='form-group'>
        {!!label && <label htmlFor={id}>{label}</label>}
        <input
          {...input}
          type={type}
          className={cn('form-control', className)}
          id={id}
          value={value}
          placeholder={placeholder}
        />
        {showError && touched &&
          (error && (
            <span className='text-danger'>{localizeError(error)}</span>
          ))}
      </div>
    )
  };

  render () {
    const { name } = this.props

    return <Field name={name} component={this.renderInput} />
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  showError: PropTypes.bool
}

export default Input
