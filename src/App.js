import "./assets/App.css";
import MainMenu from "./components/MainMenu";
import Multiplayer from "./components/multiplayer/Multiplayer";
import Navi from "./components/Navi";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Singleplayer from "./components/singleplayer/Singleplayer";
import HowToPlay from "./components/HowToPlay";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/singleplayer" element={<Singleplayer />} />
        <Route path="/multiplayer" element={<Multiplayer />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
