import React from "react";
import PropTypes from "prop-types";

class SelectOption extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <option
        type="option"
        aria-label="Radio button for following text input"
        value={value}
      >
        {value}
      </option>
    );
  }
}

SelectOption.propTypes = {
  selected: PropTypes.bool,
  value: PropTypes.string
};
export default SelectOption;
