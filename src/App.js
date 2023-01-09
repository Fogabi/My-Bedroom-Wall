import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Light from "./components/Light/MainLight/Light.js";
import Dark from "./components/Dark/Dark";

const App = () => {
    return(
      //  <BrowserRouter>
      //      <Route component = { Light }  path="/Light" />
      //      <Route component = { Dark }  path="/Dark" />
      //  </BrowserRouter>
      <Light />
  );
}

export default App;
