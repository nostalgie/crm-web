import React from 'react'
// import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import Input from 'components/Forms/Elements/Input'
import { validate } from 'utils/validators'

const NewTicketForm = props => {
  const { handleSubmit, error } = props
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        name='firstname'
        id='firstname'
        placeholder='Ваше имя'
        label='Ваше имя'
      />
      <Input
        name='lastname'
        id='lastname'
        placeholder='Ваша фамилия'
        label='Ваша фамилия'
      />
      <Input
        name='phone'
        id='phone'
        placeholder='Контактный телефон'
        label='Контактный телефон'
      />
      {error && <div className='text-danger'>{error}</div>}
      <button type='submit'>Сообщить о проблеме</button>
    </form>
  )
}

// NewTicketForm.propTypes = {
//   handleSubmit: PropTypes.func
// }

export default reduxForm({
  form: 'newTicket',
  validate
})(NewTicketForm)
