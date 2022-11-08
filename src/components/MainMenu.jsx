/* eslint-disable jsx-a11y/alt-text */
import menu from "../images/menu.png";
import "../MainMenu.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export const MainMenu = () => {
  return (
    <div>
      <h2>Main Menü</h2>
      <img className="imgMainMenu" src={menu} />
      <br></br>
      <br></br>
      <Link to="/singleplayer">
        <Button>Singleplayer</Button>
      </Link>{" "}
      <Link to="/multiplayer">
        <Button>Multiplayer</Button>
      </Link>
    </div>
  );
};
export default MainMenu;
