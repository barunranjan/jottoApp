import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Input = (props) => {
  return (
    <div data-test="test-inputComponent" className="row d-flex">
      {props.success ? null : (
        <div>
          {" "}
          <form className="form-inline">
            <input
              type="text"
              className="mb-5 mx-sm-3 form-control"
              placeholder="try words..."
              data-test="test-input"
            />
            <button
              className="btn btn-primary mb-2"
              data-test="test-button"
              type="submit"
            >
              Check
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = ({ success }) => {
  return { success };
};

Input.propTypes = {};

export default connect(mapStateToProps)(Input);
