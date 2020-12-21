import { shallow } from "enzyme";
import React from "react";
import GussedWord from "./GussedWord";
import { checkProp, findByTestAttr } from "./test/testUtils";

const defaultProps = {
  gussedWords: [{ gussedWord: "train", letterMatchCount: 3 }],
};

const setUp = (props = {}) => {
  const setUpProps = { ...defaultProps, ...props };
  return shallow(<GussedWord {...setUpProps} />);
};

test("does not throw warining", () => {
  checkProp(GussedWord, defaultProps);
});
describe("If no word is gussed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ gussedWords: [] });
  });
  test("render without error", () => {
    const component = findByTestAttr(wrapper, "test-gussed");
    expect(component.length).toBe(1);
  });
  test("render instruction", () => {
    const instruction = findByTestAttr(
      wrapper,
      "test-gussed-instruction"
    ).text();
    expect(instruction.length).not.toBe(0);
  });
});
describe("If word is gussed", () => {});
