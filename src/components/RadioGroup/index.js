import React, { Component } from "react";
import RadioOption from "./RadioOption";
import PropTypes from "prop-types";

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPicked: props.initValue
    };
  }

  handleChange = value => {
    this.setState({ isPicked: value });
  };

  render() {
    const { children, name } = this.props;
    return React.Children.map(children, child => {
      if (child.type === RadioOption)
        return React.cloneElement(child, {
          isChecked: this.state.isPicked === child.props.value,
          name,
          onChange: this.handleChange
        });
      return child;
    });
  }
}

RadioGroup.propTypes = {
  handleChange: PropTypes.func,
  initValue: PropTypes.string,
  name: PropTypes.string
};
