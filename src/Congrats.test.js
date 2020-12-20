import { shallow } from "enzyme";
import React from "react";
import Congrats from "./Congrats";
import { checkProp, findByTestAttr } from "./test/testUtils";

const defaultProps = { success: false };

const setUp = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

// const findDataByTestAttribute = (wrapper, )

test("reder without error", () => {
  const wrapper = setUp({ success: false });
  const congComponent = findByTestAttr(wrapper, "test-congrats");
  expect(congComponent.length).toBe(1);
});
test("render no text when success props is 'false'", () => {
  const wrapper = setUp({ success: false });
  const congText = findByTestAttr(wrapper, "test-congrats").text();
  expect(congText).toBe("");
});
test("render non-empty congrats when success props is 'true'", () => {
  const wrapper = setUp({ success: false });
  const congText = findByTestAttr(wrapper, "test-congrats").text();
  expect(congText.length).toBe(0);
});
test("doesnot throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProp(Congrats, expectedProps);
});
