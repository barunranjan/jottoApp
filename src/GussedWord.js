import React from "react";
import PropTypes from "prop-types";

const GussedWord = (props) => {
  return (
    <div data-test="test-gussed">
      {props.gussedWords.length === 0 && (
        <span data-test="test-gussed-instruction">Instruction</span>
      )}
    </div>
  );
};

GussedWord.propTypes = {
  gussedWords: PropTypes.arrayOf(
    PropTypes.shape({
      gussedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GussedWord;
