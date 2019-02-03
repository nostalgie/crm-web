import React from 'react'
import PropTypes from 'prop-types'
import Update from 'components/Update'
import TicketButtonGroup from 'components/TicketButtonGroup/container'
import { roles } from '../../constants'

class TicketFull extends React.Component {
  state = {
    comment: ''
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
    const { newExecutor } = e.target.dataset

    await this.props.addUpdate(id, comment)

    if (newExecutor) {
      this.changeExecutor(newExecutor)
    }

    this.setState({ comment: '' })
  };

  changeExecutor = async executorRole => {
    console.log('hi', executorRole)
    // const { id } = this.props
    // const { comment } = this.state
    // this.props.addUpdate(id, comment, executorId)
  };

  completeTicket = () => {
    this.addUpdate()
    this.props.completeTicket(this.props.id)
  };

  rateTicket = () => {
    this.addUpdate()
    const rating = prompt('Оцените от 1 до 5')
    this.props.rateTicket(this.props.id, rating)
  };

  render () {
    const { ticketInfo } = this.props
    const { comment } = this.state

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
      currentRole,
      isFinished,
      rating
    } = ticketInfo
    const date = new Date(createdAt)

    return (
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
    )
  }
}

TicketFull.propTypes = {
  currentRole: PropTypes.string.isRequired,
  ticketInfo: PropTypes.object
}
export default TicketFull
