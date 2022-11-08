import "./App.css";
import MainMenu from "./components/MainMenu";
import Multiplayer from "./components/Multiplayer";
import Navi from "./components/Navi";
import NotFound from "./components/NotFound";
import Singleplayer from "./components/Singleplayer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/singleplayer" element={<Singleplayer />} />
        <Route path="/multiplayer" element={<Multiplayer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
