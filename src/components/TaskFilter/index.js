import React, { Component } from 'react'
import RadioGroup from 'components/Forms/Elements/RadioGroup'
import RadioOption from 'components/Forms/Elements/RadioGroup/RadioOption'
import Select from 'components/Forms/Elements/Select'
import SelectOption from 'components/Forms/Elements/Select/SelectOption'
import { periods, types } from 'constants/menus/filter'

export class TaskFilter extends Component {
  constructor (props) {
    super(props)
    const { type, customer, period, dateSt, dateEnd } = props.initState
    this.state = {
      type,
      customer,
      period,
      dateSt,
      dateEnd
    }
  }

  handleSubmit = () => {
    console.log(this.state)
    this.props.handleSubmit(this.state)
  };

  render () {
    const { dateSt, dateEnd } = this.state
    const { customers } = this.props

    return (
      <div className='card h-25 d-flex flex-column justify-content-around'>
        <div className={'d-flex justify-content-start'}>
          <RadioGroup
            className={'d-flex justify-content-between w-75'}
            name='content'
            handleChange={type => {
              this.setState({ type })
            }}
            initValue={this.state.type}
          >
            <RadioOption value={types.ALL} textValue={types.ALL} />
            <RadioOption value={types.CUSTOMER} textValue={types.CUSTOMER} />
          </RadioGroup>
          {this.state.type === types.CUSTOMER ? (
            <Select
              className={'w-25'}
              name='customer'
              id='customer-select'
              handleChange={customer => {
                console.log('dwedwed')
                this.setState({ customer })
              }}
            >
              {customers.map(({ id, name }) => (
                <SelectOption
                  key={id + '_' + name}
                  value={id + ''}
                  textValue={name}
                />
              ))}
            </Select>
          ) : null}
        </div>
        <RadioGroup
          className={'d-flex justify-content-between'}
          name='content'
          handleChange={period => {
            this.setState({ period })
          }}
          initValue={this.state.period}
        >
          <RadioOption
            value={periods.DAY.request}
            textValue={periods.DAY.value}
          />
          <RadioOption
            value={periods.WEEK.request}
            textValue={periods.WEEK.value}
          />
          <RadioOption
            value={periods.MONTH.request}
            textValue={periods.MONTH.value}
          />
          <RadioOption
            value={periods.CUSTOM.request}
            textValue={periods.CUSTOM.value}
          />
        </RadioGroup>

        {this.state.period === periods.CUSTOM.request ? (
          <div className={'d-flex justify-content-around'}>
            {'c'}
            <input
              type='date'
              value={dateSt}
              min={'1970-01-01'} // todo
              max={dateEnd}
              onChange={e => {
                const value = e.target.value
                this.setState({ dateSt: value })
              }}
            />
            {'по'}
            <input
              type='date'
              value={dateEnd}
              min={dateSt}
              max={'2020-01-01'} // todo date max
              onChange={e => {
                const value = e.target.value
                this.setState({ dateEnd: value })
              }}
            />
          </div>
        ) : null}
        <button
          type='button'
          onClick={this.handleSubmit}
          class='btn btn-primary w-25'
        >
          Показать
        </button>
      </div>
    )
  }
}

export default TaskFilter
