import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import { middlewares } from "../configStore";

export const storeFactory = (initialState) => {
  const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreMiddleware(rootReducer, initialState);
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
