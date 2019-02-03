import React from 'react'
import ReactDOM from 'react-dom'
import ModalView from './view'

class ModalContainer extends React.PureComponent {
    state = {
      closable: this.props.closable !== undefined ? this.props.closable : true,
      destroyOnClose: this.props.destroyOnClose !== undefined ? this.props.destroyOnClose : false,
      visible: this.props.visible !== undefined ? this.props.visible : false
    }
    modalRef
    modalRoot = document.getElementById('modal-root')
    body = document.getElementsByTagName('body')[0]

    componentDidMount () {
      if (this.state.visible) {
        this.body.className = 'no-scroll'
      }
    }

    componentWillUnmount () {
      if (this.modalRoot.childElementCount === 1) {
        this.body.className = ''
      }
    }

    componentDidUpdate (prevProps, prevState) {
      if (this.props.visible !== undefined && prevProps.visible !== this.props.visible) {
        this.setState({ visible: this.props.visible })
      }
      if (this.state.visible !== prevState.visible) {
        if (this.modalRoot.childElementCount) {
          this.body.className = 'no-scroll'
        } else {
          this.body.className = ''
        }
      }
    }

    getModalRef = (modalRef) => {
      this.modalRef = modalRef
    }

    handleClose = () => {
      const { onClose, destroyOnClose } = this.props

      onClose && onClose()

      if (!destroyOnClose) {
        this.setState({ visible: false })
      }
    }

    handleClickOutside = (event) => {
      if (this.modalRef &&
            this.modalRoot.lastElementChild.contains(this.modalRef) &&
            !this.modalRef.contains(event.target)
      ) {
        this.handleClose()
      }
    }

    render () {
      const { className, children } = this.props
      const { destroyOnClose, visible, closable } = this.state

      if (destroyOnClose && !visible) {
        return null
      }

      return ReactDOM.createPortal(
        <ModalView
          className={className}
          visible={visible}
          closable={closable}
          onClose={this.handleClose}
          getModalRef={this.getModalRef}
          onClick={this.handleClickOutside}
        >
          {children}
        </ModalView>, this.modalRoot
      )
    }
}

export default ModalContainer
