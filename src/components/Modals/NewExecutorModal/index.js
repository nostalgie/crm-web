import React from 'react'
import Modal from 'components/Modals/Modal'

const NewExecutorModal = (props) => {
  const { visible, destroyOnClose, onClose, onSend } = props

  return (
    <Modal
      visible={visible}
      destroyOnClose={destroyOnClose}
      onClose={onClose}
    >
      <div>
        <h4>Выберите нового исполнителя</h4>
        <div className='form-group'>
          <select className='form-control'>
            <option value={1}>kek</option>
          </select>
          <button className='btn btn-primary' onClick={onSend}>Отправить</button>
        </div>
      </div>
    </Modal>
  )
}

export default NewExecutorModal
