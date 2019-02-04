import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import cn from 'classnames'
import { localizeError } from 'utils/localizers'

class Input extends React.Component {
  renderInput = ({ input, meta: { touched, error } }) => {
    const { placeholder, id, label, className, showError = true } = this.props

    return (
      <div className='form-group'>
        {!!label && <label htmlFor={id}>{label}</label>}
        <textarea
          {...input}
          className={cn('form-control', className)}
          id={id}
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
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  showError: PropTypes.bool
}

export default Input
