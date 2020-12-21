import React from "react";
import PropTypes from "prop-types";
export const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="test-congrats" className="alert alert-success">
        <span data-test="test-success"> Congo!!! You gussed the words</span>
      </div>
    );
  } else {
    return <div data-test="test-congrats"></div>;
  }
};
Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
