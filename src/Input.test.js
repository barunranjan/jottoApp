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
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setUp(initialState);
    });
    test("render without error", () => {
      const component = findByTestAttr(wrapper, "test-inputComponent");
      expect(component.length).toBe(1);
    });
    test("render input Box", () => {
      const inputBox = findByTestAttr(wrapper, "test-input");
      expect(inputBox.length).toBe(1);
    });
    test("render submit button", () => {
      const submitButton = findByTestAttr(wrapper, "test-button");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been been guessed yet", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setUp(initialState);
    });
    test("render without error", () => {
      const component = findByTestAttr(wrapper, "test-inputComponent");
      expect(component.length).toBe(1);
    });
    test("not render input Box", () => {
      const component = findByTestAttr(wrapper, "test-input");
      expect(component.length).toBe(0);
    });
    test("not render submit button", () => {
      const component = findByTestAttr(wrapper, "test-button");
      expect(component.length).toBe(0);
    });
  });
});
