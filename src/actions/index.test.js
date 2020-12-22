import moxios, { requests } from "moxios";
import { storeFactory } from "../test/testUtils";
import { getSecretWord } from "./index";

describe("get secret word action creater", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("add response word to the state", () => {
    const secretWord = "party";
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
