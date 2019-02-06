import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import cn from 'classnames'
import { localizeError } from 'utils/localizers'

class Select extends React.PureComponent {
  renderInput = ({ input, meta: { touched, error } }) => {
    const { value, options, id, label, className, showError = true } = this.props

    return (
      <div className='form-group'>
        {!!label && <label htmlFor={id}>{label}</label>}
        <select
          {...input}
          className={cn('form-control', className)}
          id={id}
          value={value}
        >
          {options.map(option => (
            <option value={option.value}>{option.text}</option>
          ))}
        </select>
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

Select.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  showError: PropTypes.bool
}

export default Select
