import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import rootReducer from "../reducer";

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProp = (component, conformingProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "props",
    component.name
  );
  expect(propsError).toBeUndefined();
};
