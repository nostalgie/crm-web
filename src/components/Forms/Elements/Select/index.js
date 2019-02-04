import React, { Component } from "react";
import SelectOption from "./SelectOption";
import PropTypes from "prop-types";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPicked: props.initValue
    };
  }

  handleChange = value => {
    this.setState({ isPicked: value });
    this.props.handleChange(this.state.isPicked);
  };

  render() {
    const { className, children, name } = this.props;
    return (
      <select className={`custom-select custom-select-sm ${className}`}>
        {React.Children.map(children, child => {
          if (child.type === SelectOption)
            return React.cloneElement(child, {
              name,
              selected: this.state.isPicked === child.props.value
            });
          return child;
        })}
      </select>
    );
  }
}

Select.propTypes = {
  handleChange: PropTypes.func,
  initValue: PropTypes.string,
  name: PropTypes.string
};
