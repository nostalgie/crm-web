import React, { PureComponent } from 'react';

export default class CurrentDate extends PureComponent {
  constructor() {
    super();
    const intervalId = setInterval(this.checkDate, 2000);
    this.state = {
      intervalId,
      currDay: new Date().toLocaleDateString(),
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  checkDate = () => {
    const today = new Date().toLocaleDateString();
    if (!this.state.currDay || today !== this.state.currDay) {
      this.setState({ currDay: today });
    }
  };

  render() {
    return (
      <div className="alert alert-dark">
        Текущая дата(rofl): {this.state.currDay}
      </div>
    );
  }
}
