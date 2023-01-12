import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Room from "./components/Room/MainRoom/Room.js";
import Door from "./components/Door/Door";

export default function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Room/>} />
    //     <Route path="/door" element={<Door />} />
    //   </Routes>
    // </BrowserRouter>
    <Room />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
