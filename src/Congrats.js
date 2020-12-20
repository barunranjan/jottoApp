import React from "react";
import PropTypes from "prop-types";
export const congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="test-congrats">
        <span data-test="test-success"> Success</span>
      </div>
    );
  } else {
    return <div data-test="test-congrats"></div>;
  }
};
congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default congrats;
