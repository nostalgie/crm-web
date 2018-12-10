import React from "react";
import PropTypes from "prop-types";

class RadioOption extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input
              type="radio"
              aria-label="Radio button for following text input"
            />
          </div>
        </div>
        <button
          type="text"
          // class="form-control"
          aria-label={value}
          onClick={onChange.bind(this, value)}
        >
          {value}
        </button>
      </div>
    );
  }
}

RadioOption.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  isChecked: PropTypes.bool
};
export default RadioOption;