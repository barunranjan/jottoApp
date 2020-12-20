import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import Enzyme, { shallow } from "enzyme";

import { findByTestAttr } from "./test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const setUp = (props = {}) => shallow(<Congrats {...props} />);

// const findDataByTestAttribute = (wrapper, )

test("reder without error", () => {
  const wrapper = setUp();
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
