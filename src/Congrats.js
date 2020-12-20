import React from "react";

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
export default congrats;
