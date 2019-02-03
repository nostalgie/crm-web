import React from "react";
import PropTypes from "prop-types";

class SelectOption extends React.Component {
  render() {
    const { value, textValue } = this.props;
    return (
      <option
        type="option"
        aria-label="Radio button for following text input"
        value={value}
      >
        {textValue}
      </option>
    );
  }
}

SelectOption.propTypes = {
  selected: PropTypes.bool,
  value: PropTypes.string,
  textValue: PropTypes.string
};
export default SelectOption;
