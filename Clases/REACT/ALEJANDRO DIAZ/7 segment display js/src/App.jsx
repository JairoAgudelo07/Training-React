import { SevenSegmentDisplay } from "./components/level1/sevenSegmentDisplay.jsx";
import { SevenSegmentDisplayLevelTwo } from "./components/level2/sevenSegmentDisplayLevelTwo.jsx";
import { SevenSegmentDisplayLevelThree } from "./components/level3/sevenSegmentDisplayLevelThree.jsx";
import "./app.css";

function App() {
  return (
    <>
      <SevenSegmentDisplay digit={9} text={"NIVEL 1"} />
      <SevenSegmentDisplayLevelTwo text={"NIVEL 2"} />
      {/* <SevenSegmentDisplayLevelThree /> */}
    </>
  );
}

export default App;
