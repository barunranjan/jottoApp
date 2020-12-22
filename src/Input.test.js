import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "./test/testUtils";

import Input from "./Input";
import { guessWord } from "./actions";

const setUp = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};
const setUp2 = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive();

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
  describe("word has been been guessed", () => {
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
describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setUp2({ success });
    const successProp = wrapper.props().success;
    expect(successProp).toBe(success);
  });
  test("`guessWord` action creator is a function prop", () => {
    const wrapper = setUp2();
    const guessWordProp = wrapper.props().guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
