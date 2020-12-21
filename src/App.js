import "./App.css";
import Congrats from "./Congrats";
import GussedWord from "./GussedWord";

const App = () => {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={false} />
      <GussedWord
        gussedWords={[
          { gussedWord: "train", letterMatchCount: 3 },
          { gussedWord: "agile", letterMatchCount: 1 },
          { gussedWord: "party", letterMatchCount: 4 },
        ]}
      />
    </div>
  );
};

export default App;
