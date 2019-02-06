import React from 'react'
// import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import Input from 'components/Forms/Elements/Input'
import Select from 'components/Forms/Elements/NewSelect'
import Textarea from 'components/Forms/Elements/Textarea'
import { validate } from 'utils/validators'
import { roles } from '../../../constants'

const NewTicketForm = props => {
  const { handleSubmit, error, currentRole, customers } = props
  return (
    <form onSubmit={handleSubmit} noValidate>
      {currentRole !== roles.CUSTOMER && (
        <Select
          name='customer'
          id='customer'
          label='Выберите заказчика'
          options={customers.map(customer => ({
            value: customer.id,
            text: customer.name
          }))}
          showError={false}
        />
      )}
      <Input
        name='firstName'
        id='firstName'
        placeholder='Ваше имя'
        label='Ваше имя'
        showError={false}
      />
      <Input
        name='lastName'
        id='lastName'
        placeholder='Ваша фамилия'
        label='Ваша фамилия'
        showError={false}
      />
      <Input
        name='phoneNumber'
        id='phoneNumber'
        placeholder='Контактный телефон'
        label='Контактный телефон'
        showError={false}
      />
      <Textarea
        name='description'
        id='description'
        placeholder='Краткое описание проблемы'
        label='Краткое описание проблемы'
        showError={false}
      />
      <div className='d-flex flex-row'>
        <Input
          name='type'
          id='type-common'
          type='radio'
          placeholder='Обслуживание'
          label='Обслуживание'
          value='common'
          showError={false}
        />
        <Input
          name='type'
          id='type-urgent'
          type='radio'
          placeholder='Авария'
          label='Авария'
          value='urgent'
          showError={false}
        />
      </div>
      {error && <div className='text-danger'>{error}</div>}
      <button type='submit'>Сообщить о проблеме</button>
    </form>
  )
}

export default reduxForm({
  form: 'newTicket',
  validate,
  initialValues: {
    type: 'common'
  }
})(NewTicketForm)
