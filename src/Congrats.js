import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
export const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="test-congrats" className="alert alert-success">
        <span data-test="test-success"> Congo!!! You guessed the words</span>
      </div>
    );
  } else {
    return (
      <div data-test="test-congrats">
        <Input />
      </div>
    );
  }
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
