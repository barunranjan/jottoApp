import { storeFactory } from "./test/testUtils";
import { guessWord } from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfulguess = "train";
  describe("no guessWord", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulguess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulguess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
  describe("some guessWord", () => {
    const guessedWords = [{ guessedWord: "agile", letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulguess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulguess,
            letterMatchCount: 3,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
