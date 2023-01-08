import "./App.css";
import Egg from "./components/Egg/Egg";
import BlackCat from "./components/LineOne/BlackCat/BlackCat";
import TeaCup from "./components/LineOne/TeaCup/TeaCup";
import Header from "./components/Header/Header";
import TextOne from "./components/LineOne/TextOne/TextOne";
import TextTwo from "./components/LineTwo/TextTwo/TextTwo";
import DayNight from "./components/LineTwo/DayNight/DayNight";
import Idea from "./components/LineThree/Idea/Idea";

function App() {
  return (
    <div>
      <Header />
      <div className="line__1">
        <TextOne />
        <BlackCat />
        <TeaCup />
      </div>
      <div className="line__2">
        <DayNight />
        <TextTwo />
      </div>
      <div className="line__3">
        <Idea />
      </div>
    </div>
  );
}

export default App;
