import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "./test/testUtils";

import Input from "./Input";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed yet", () => {
    test("render without error", () => {});
    test("render input Box", () => {});
    test("render submit button", () => {});
  });
  describe("word has been been guessed yet", () => {
    test("render without error", () => {});
    test("not render input Box", () => {});
    test("not render submit button", () => {});
  });
});
