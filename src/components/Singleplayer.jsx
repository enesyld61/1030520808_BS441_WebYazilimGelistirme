/* eslint-disable jsx-a11y/alt-text */
import "../Singleplayer.css";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Rock from "../images/rock.png";
import Paper from "../images/paper.png";
import Scissors from "../images/scissors.png";

export const Singleplayer = () => {
  const list = [
    "btnRock",
    "btnPaper",
    "btnScissors",
    "pcBtn0",
    "pcBtn1",
    "pcBtn2",
  ];
  const [score, setScore] = useState(0);
  const [pWin, setWin] = useState(0);
  const [pLose, setLose] = useState(0);
  const [pDraw, setDraw] = useState(0);

  const win = (btn, pcBtn) => {
    btn.classList.add("green");
    pcBtn.classList.add("red");
    setWin((prevState) => prevState + 1);
    setScore((prevState) => prevState + 1);
  };
  const draw = (btn, pcBtn) => {
    btn.classList.add("gray");
    pcBtn.classList.add("gray");
    setDraw((prevState) => prevState + 1);
  };
  const lose = (btn, pcBtn) => {
    btn.classList.add("red");
    pcBtn.classList.add("green");
    setLose((prevState) => prevState + 1);
    setScore((prevState) => prevState - 1);
  };

  const play = (btn, int) => {
    let random = parseInt(Math.random() * 3);
    const pcBtn = document.getElementById(`pcBtn${random}`);
    if (int === 0) {
      if (random === 0) {
        draw(btn, pcBtn);
      } else if (random === 1) {
        lose(btn, pcBtn);
      } else {
        win(btn, pcBtn);
      }
    } else if (int === 1) {
      if (random === 0) {
        win(btn, pcBtn);
      } else if (random === 1) {
        draw(btn, pcBtn);
      } else {
        lose(btn, pcBtn);
      }
    } else {
      if (random === 0) {
        lose(btn, pcBtn);
      } else if (random === 1) {
        win(btn, pcBtn);
      } else {
        draw(btn, pcBtn);
      }
    }
    document.getElementById("cont").classList.add("wait");
  };

  const devam = () => {
    document.getElementById("cont").classList.remove("wait");
    for (let btn of list) {
      const doc = document.getElementById(btn).classList;
      doc.remove("red");
      doc.remove("green");
      doc.remove("gray");
    }
  };

  return (
    <div>
      <h2>Singleplayer</h2>

      <Container id="cont">
        <Row>
          <Col xs="6">
            <h2>You</h2>
            <Button
              onClick={() => {
                play(document.getElementById("btnRock"), 0);
              }}
              id="btnRock"
              className="imgBtn"
              variant="light"
            >
              <img className="images" src={Rock}></img>
            </Button>
            <Button
              onClick={() => {
                play(document.getElementById("btnPaper"), 1);
              }}
              id="btnPaper"
              className="imgBtn"
              variant="light"
            >
              <img className="images" src={Paper}></img>
            </Button>
            <Button
              onClick={() => {
                play(document.getElementById("btnScissors"), 2);
              }}
              id="btnScissors"
              className="imgBtn"
              variant="light"
            >
              <img className="images" src={Scissors}></img>
            </Button>
          </Col>
          <Col xs="6">
            <h2>Computer</h2>
            <Button id="pcBtn0" className="imgBtn" variant="light" disabled>
              <img className="images" src={Rock}></img>
            </Button>
            <Button id="pcBtn1" className="imgBtn" variant="light" disabled>
              <img className="images" src={Paper}></img>
            </Button>
            <Button id="pcBtn2" className="imgBtn" variant="light" disabled>
              <img className="images" src={Scissors}></img>
            </Button>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <h4>Score: {score}</h4>
      <h6>Win: {pWin}</h6>
      <h6>Draw: {pDraw}</h6>
      <h6>Lose: {pLose}</h6>
      <br />
      <br />
      <br />
      <Button variant="secondary" onClick={() => devam()}>
        devam
      </Button>
    </div>
  );
};
export default Singleplayer;
