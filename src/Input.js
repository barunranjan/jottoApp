import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Input = (props) => {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="try words..."
        data-test="test-input"
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

Input.propTypes = {};

export default connect(mapStateToProps)(Input);
