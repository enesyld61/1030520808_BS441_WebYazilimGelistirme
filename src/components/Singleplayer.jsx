/* eslint-disable jsx-a11y/alt-text */
import "../Singleplayer.css";
import { React, useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Rock from "../images/rock.png";
import Paper from "../images/paper.png";
import Scissors from "../images/scissors.png";
import { Link } from "react-router-dom";

export const Singleplayer = () => {
  const [pWin, setWin] = useState(0);
  const [pLose, setLose] = useState(0);
  const [pDraw, setDraw] = useState(0);
  const [maxRound, setMaxRound] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [disable, setDisable] = useState(true);
  const [selectedBtns, setSelectedBtns] = useState([]);
  const [result, setResult] = useState("");
  const [final, setFinal] = useState(false);

  const win = (btn, pcBtn) => {
    btn.classList.add("green");
    pcBtn.classList.add("red");
    setWin((prevState) => prevState + 1);
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
    setCurrentRound((prevState) => prevState + 1);
    // eslint-disable-next-line eqeqeq
    if (currentRound == maxRound) {
      setSelectedBtns([btn, pcBtn]);
      setFinal(true);
      setTimeout(finish, 1000);
    } else {
      setTimeout(nextRound.bind(null, [btn, pcBtn]), 1000);
    }
  };

  const nextRound = (btns) => {
    document.getElementById("cont").classList.remove("wait");
    for (let btn of btns) {
      btn.classList.remove("red");
      btn.classList.remove("gray");
      btn.classList.remove("green");
    }
  };
  const finish = () => {
    const resultCont = document.getElementById("resultCont");
    resultCont.classList.remove("close");
    resultCont.classList.add("open");
  };

  const start = () => {
    const playCont = document.getElementById("playCont");
    playCont.classList.remove("close");
    playCont.classList.add("open");
    const chooseCont = document.getElementById("chooseCont");
    chooseCont.classList.remove("open");
    chooseCont.classList.add("closing");
    setTimeout(() => {
      chooseCont.classList.remove("closing");
      chooseCont.classList.add("close");
    }, 300);
  };

  const clearHistory = () => {
    setFinal(false);
    setWin(0);
    setLose(0);
    setDraw(0);
    setCurrentRound(1);
    for (let btn of selectedBtns) {
      btn.classList.remove("red");
      btn.classList.remove("gray");
      btn.classList.remove("green");
    }
  };

  const radioChange = (label) => {
    setMaxRound(label);
    setDisable(false);
  };

  const playAgain = () => {
    const resultCont = document.getElementById("resultCont");
    resultCont.classList.remove("open");
    resultCont.classList.add("closing");
    setTimeout(() => {
      resultCont.classList.remove("closing");
      resultCont.classList.add("close");
    }, 300);
    document.getElementById("cont").classList.remove("wait");
    document.getElementById("playCont").classList.add("close");
    document.getElementById("playCont").classList.remove("open");
    document.getElementById("chooseCont").classList.add("open");
    document.getElementById("chooseCont").classList.remove("close");
    setTimeout(() => clearHistory(), 500);
  };

  useEffect(() => {
    if (pWin > pLose) {
      setResult("You won!");
    } else if (pWin < pLose) {
      setResult("You lose!");
    } else {
      setResult("Draw!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [final]);

  return (
    <div>
      <h2>Singleplayer</h2>
      <Container id="chooseCont" className="open">
        <h2>Round</h2>
        <Form>
          {["3", "5", "7", "9"].map((label) => (
            <div key={`radio-${label}`}>
              <Form.Check
                inline
                label={label}
                name="group1"
                type="radio"
                id={`radio${label}`}
                onChange={() => radioChange(label)}
              />
            </div>
          ))}
        </Form>

        <Button
          disabled={disable}
          id="btnPlay"
          variant="primary"
          onClick={() => start()}
        >
          Play
        </Button>
      </Container>
      <Container id="playCont" className="close">
        <Container id="cont">
          <Row>
            <Col xs="5">
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
            <Col xs="2">
              <h2>
                {pWin} - {pLose}
              </h2>
            </Col>
            <Col xs="5">
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
        <h6>Win: {pWin}</h6>
        <h6>Draw: {pDraw}</h6>
        <h6>Lose: {pLose}</h6>
      </Container>
      <Container id="resultCont" className="close">
        <h2>{result}</h2>
        <Button variant="primary" onClick={() => playAgain()}>
          Play Again
        </Button>{" "}
        <Link to="/">
          <Button variant="primary">Main Menu</Button>
        </Link>
      </Container>
    </div>
  );
};
export default Singleplayer;
