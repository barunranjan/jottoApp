import React from "react";
import PropTypes from "prop-types";

const GussedWord = (props) => {
  return (
    <div data-test="test-gussed">
      {props.gussedWords.length === 0 ? (
        <span data-test="test-gussed-instruction">
          Try searching gussed words!!!
        </span>
      ) : (
        <div data-test="test-gussed-section">
          <h3>Gussed Word</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Attempt</th>
                <th> Guess</th>
                <th>Matching Length</th>
              </tr>
            </thead>
            <tbody>
              {props.gussedWords.map((word, index) => (
                <tr data-test="test-gussed-section-table" key={index}>
                  <td>{index + 1}</td>
                  <td>{word.gussedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
