import "./App.css";
import Congrats from "./Congrats";
import GussedWord from "./GussedWord";

const App = () => {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GussedWord
        guessedWords={[
          { guessedWord: "train", letterMatchCount: 3 },
          { guessedWord: "agile", letterMatchCount: 1 },
          { guessedWord: "party", letterMatchCount: 4 },
        ]}
      />
    </div>
  );
};

export default App;
