import React from 'react'

import './styles.css'

const ModalView = (props) => {
  const {
    className,
    children,
    visible,
    closable,
    onClose,
    onClick,
    getModalRef
  } = props

  if (!visible) {
    return null
  }

  return (
    <div className={`custom-modal ${className || ''}`} onClick={onClick}>
      <div className={'modal-content'} ref={getModalRef}>
        {closable && (
          <div className={'modal-close-wrapper'}>
            <span
              className={'modal-close-icon'}
              onClick={onClose}
            >
              &times;
            </span>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export default ModalView
