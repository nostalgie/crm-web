import React from 'react'
import PropTypes from 'prop-types'
import Update from 'components/Update'
import TicketButtonGroup from 'components/TicketButtonGroup/container'
import NewExecutorModal from 'components/Modals/NewExecutorModal'

class TicketFull extends React.Component {
  state = {
    comment: '',
    showNewExecutorModal: false
  };

  componentDidMount () {
    this.getTicketInfo()
  }

  getTicketInfo = () => {
    const { match, getTicketInfo } = this.props
    const { id } = match.params

    getTicketInfo(id)
  }

  handleCommentChange = ev => {
    const { value } = ev.target
    this.setState({ comment: value })
  };

  addUpdate = async e => {
    const { id } = this.props.ticketInfo
    const { comment } = this.state
    const { newexecutor: newExecutorRole, action } = e.target.dataset
    let newExecutorId

    if (newExecutorRole) {
      newExecutorId = await this.changeExecutor(newExecutorRole)

      if (!newExecutorId) {
        return
      }
    }

    await this.props.addUpdate(id, comment, newExecutorId)

    this.setState({ comment: '' })

    switch (action) {
      case 'complete': {
        this.completeTicket()
        break
      }
      case 'rate': {
        this.rateTicket()
        break
      }
    }

    await this.getTicketInfo()
  };

  changeExecutor = async executorRole => {
    this.toggleNewExecutorModal()

    return new Promise(resolve => {
      this.resolve = resolve
    })
  };

  onExecutorSelect = async () => {
    this.toggleNewExecutorModal()
    return this.resolve(1)
  }

  completeTicket = () => {
    this.props.completeTicket(this.props.ticketInfo.id)
  };

  rateTicket = () => {
    const rating = prompt('Оцените от 1 до 5')
    this.props.rateTicket(this.props.ticketInfo.id, rating)
  };

  toggleNewExecutorModal = () => {
    const { showNewExecutorModal } = this.state

    this.setState({ showNewExecutorModal: !showNewExecutorModal })
  }

  render () {
    const { ticketInfo } = this.props
    const { comment, showNewExecutorModal } = this.state

    if (!ticketInfo) {
      return null
    }

    const {
      createdAt,
      description,
      firstName,
      lastName,
      phoneNumber,
      updates,
      isFinished,
      rating
    } = ticketInfo
    const date = new Date(createdAt)

    return (
      <React.Fragment>
        <NewExecutorModal
          visible={showNewExecutorModal}
          onClose={this.toggleNewExecutorModal}
          onSend={this.onExecutorSelect}
        />
        <div className='card'>
          <h6 className='card-header'>
            <ul className='nav justify-content-center'>
              <li className='nav-item'>
                <span className='nav-link active'>
                  {`КОМПАНИЯ:${firstName + ' ' + lastName}`}
                </span>
              </li>
              <li className='nav-item'>
                <span className='nav-link active'>{`тел.${phoneNumber}`}</span>
              </li>
              <li className='nav-item'>
                <span className='nav-link disabled'>
                  {`от ${date.toLocaleDateString()}`}
                </span>
              </li>
            </ul>
          </h6>
          <div className='card-body'>
            <p className='card-text text-center'>{description}</p>
            <div className='d-flex flex-coloum'>
              {
                <div className='container-fluid d-flex flex-column'>
                  {updates.map(update => {
                    return <Update key={`update_${update.id}`} {...update} />
                  })}
                </div>
              }
            </div>
            {!!rating && <div>Оценка выполнения: {rating}</div>}
            {!isFinished && (
              <div className='form-group mt-2'>
                <textarea
                  value={comment}
                  name='comment'
                  rows='3'
                  className='form-control'
                  onChange={this.handleCommentChange}
                />
              </div>
            )}
            <TicketButtonGroup
              isFinished={isFinished}
              isRated={!!rating}
              isDisabled={!comment}
              addUpdate={this.addUpdate}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

TicketFull.propTypes = {
  ticketInfo: PropTypes.object
}
export default TicketFull
