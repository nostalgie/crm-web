import React, { Component } from "react";
import DatePicker from "react-date-picker";
import RadioGroup from "../RadioGroup";
import RadioOption from "../RadioGroup/RadioOption";

import "./styles.scss";

export class TaskFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <RadioGroup name="content" handleChange={this.handleChange}>
          <RadioOption value="Все" />
          <RadioOption value="По заказчику" />
        </RadioGroup>
        <DatePicker onChange={null} value={null} />
      </div>
    );
  }
}

export default TaskFilter;
