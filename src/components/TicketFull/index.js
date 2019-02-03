import React from 'react'
import PropTypes from 'prop-types'
import Update from 'components/Update'
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

  addUpdate = async () => {
    const { id } = this.props
    const { comment } = this.state
    await this.props.addUpdate(id, comment)
    this.setState({ comment: '' })
  };

  changeExecutor = executorId => {
    const { id } = this.props
    const { comment } = this.state
    this.props.addUpdate(id, comment, executorId)
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
                {`от ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}
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
          <div className='btn-toolbar justify-content-between'>
            <div className='btn-group'>
              {!isFinished && (
                <button
                  className='btn btn-primary'
                  onClick={this.addUpdate}
                  disabled={!comment}
                >
                  Оставить комментарий
                </button>
              )}
              {isFinished && !rating && (
                <button className='btn btn-primary' onClick={this.rateTicket}>
                  Оценить
                </button>
              )}
            </div>
            {currentRole !== roles.CUSTOMER && !isFinished && (
              <div className='btn-group mt-1'>
                <button
                  className='btn btn-primary'
                  onClick={this.completeTicket}
                  disabled={!comment}
                >
                  Выполнить
                </button>
                {currentRole !== roles.DUTY_ADMIN && (
                  <button
                    className='btn btn-primary'
                    onClick={() => {
                      this.changeExecutor(1)
                    }}
                    disabled={!comment}
                  >
                    Отправить дежурному
                  </button>
                )}
                {currentRole !== roles.SENIOR_ADMIN && (
                  <button
                    className='btn btn-primary'
                    onClick={() => {
                      this.changeExecutor(2)
                    }}
                    disabled={!comment}
                  >
                    Отправить старшему
                  </button>
                )}
                {currentRole !== roles.MANAGER && (
                  <button
                    className='btn btn-primary'
                    onClick={() => {
                      this.changeExecutor(3)
                    }}
                    disabled={!comment}
                  >
                    Отправить менеджеру
                  </button>
                )}
              </div>
            )}
          </div>
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
