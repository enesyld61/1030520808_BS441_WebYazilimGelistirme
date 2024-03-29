/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/game3x3/Game3x3.css";
import Rock from "../../images/rock.png";
import Paper from "../../images/paper.png";
import Scissors from "../../images/scissors.png";

export const Noname = () => {
  const [arr, setArr] = useState([]);
  const [counter, setCounter] = useState(0);
  const [selectedInt, setSelectedInt] = useState(null);
  const [point, setPoint] = useState(0);
  const [disable, setDisable] = useState(true);
  const [text, setText] = useState("Choose one");
  const [newGame, setNewGame] = useState(false);

  useEffect(() => {
    document.title = "3x3 Game";
    setNewGame(true);
  }, []);

  useEffect(() => {
    if (newGame) {
      const tempArr = [
        { id: 0, int: Math.floor(Math.random() * 3), text: "?" },
        { id: 1, int: Math.floor(Math.random() * 3), text: "?" },
        { id: 2, int: Math.floor(Math.random() * 3), text: "?" },
        { id: 3, int: Math.floor(Math.random() * 3), text: "?" },
        { id: 4, int: Math.floor(Math.random() * 3), text: "?" },
        { id: 5, int: Math.floor(Math.random() * 3), text: "?" },
        { id: 6, int: Math.floor(Math.random() * 3), text: "?" },
        { id: 7, int: Math.floor(Math.random() * 3), text: "?" },
        { id: 8, int: Math.floor(Math.random() * 3), text: "?" },
      ];
      setArr(tempArr);
      setNewGame(false);
    }
  }, [newGame]);

  useEffect(() => {
    if (counter === 9) {
      const resultCont = document.getElementById("resultCont");
      resultCont.classList.remove("close");
      resultCont.classList.add("open");
    }
  }, [counter]);

  const play = (int, id) => {
    let tempArr = arr;
    tempArr[id].text = "";
    setArr(tempArr);
    const tempBtn = document.getElementById(`btn-${id}`);
    if (int === 0) {
      tempBtn.classList.add("rockImg", "disabled");
    } else if (int === 1) {
      tempBtn.classList.add("paperImg", "disabled");
    } else {
      tempBtn.classList.add("scissorsImg", "disabled");
    }
    color(int, tempBtn);
    setCounter((prev) => prev + 1);
  };

  const color = (int, btn) => {
    if (int === 0) {
      if (selectedInt === 0) {
        btn.classList.add("draw");
      } else if (selectedInt === 1) {
        btn.classList.add("win");
        setPoint((prev) => prev + 1);
      } else if (selectedInt === 2) {
        btn.classList.add("lose");
        setPoint((prev) => prev - 1);
      }
    } else if (int === 1) {
      if (selectedInt === 0) {
        btn.classList.add("lose");
        setPoint((prev) => prev - 1);
      } else if (selectedInt === 1) {
        btn.classList.add("draw");
      } else {
        btn.classList.add("win");
        setPoint((prev) => prev + 1);
      }
    } else {
      if (selectedInt === 0) {
        btn.classList.add("win");
        setPoint((prev) => prev + 1);
      } else if (selectedInt === 1) {
        btn.classList.add("lose");
        setPoint((prev) => prev - 1);
      } else {
        btn.classList.add("draw");
      }
    }
  };

  const selectImg = (int) => {
    setText("");
    setSelectedInt(int);
    const tempImg = document.getElementById(`img${int}`);
    tempImg.classList.remove("unselected");
    tempImg.classList.add("selected", "disabled");
    setDisable(false);
    [0, 1, 2].forEach((element) => {
      if (element !== int) {
        const tempImg2 = document.getElementById(`img${element}`);
        tempImg2.classList.add("unselected");
        tempImg2.classList.remove("selected", "disabled");
      }
    });
  };

  const playAgain = () => {
    setCounter(0);
    setPoint(0);
    setNewGame(true);
    for (let i = 0; i < 9; i++) {
      const tempBtn = document.getElementById(`btn-${i}`);
      tempBtn.classList.remove(
        "win",
        "draw",
        "lose",
        "rockImg",
        "paperImg",
        "scissorsImg",
        "disabled"
      );
    }

    const resultCont = document.getElementById("resultCont");
    resultCont.classList.remove("open");
    resultCont.classList.add("close");
  };

  return (
    <div>
      <h1>3x3 Game</h1>
      <Container>
        <Row>
          <Col xs="6" id="colBtn">
            {arr.map((obj) => (
              <Button
                variant="secondary"
                id={`btn-${obj.id}`}
                key={obj.id}
                className="btnUnknown"
                disabled={disable}
                onClick={() => {
                  play(obj.int, obj.id);
                }}
              >
                {obj.text}
              </Button>
            ))}
          </Col>
          <Col xs="6">
            <h2 id="text">{text}</h2>
            <img
              id="img0"
              src={Rock}
              alt="Rock"
              className="btnImg unselected"
              onClick={() => {
                selectImg(0);
              }}
            ></img>
            <img
              id="img1"
              src={Paper}
              alt="Paper"
              className="btnImg unselected"
              onClick={() => {
                selectImg(1);
              }}
            ></img>
            <img
              id="img2"
              src={Scissors}
              alt="Scissors"
              className="btnImg unselected"
              onClick={() => {
                selectImg(2);
              }}
            ></img>
            <hr />
            <h2>Score: {point}</h2>
          </Col>
        </Row>
      </Container>
      <Container id="resultCont" className="close">
        <h2 id="resultLabel">Your score: {point}</h2>
        <Button
          className="resultBtns"
          variant="primary"
          onClick={() => playAgain()}
        >
          Play Again
        </Button>{" "}
        <Link to="/">
          <Button className="resultBtns" variant="primary">
            Main Menu
          </Button>
        </Link>
      </Container>
    </div>
  );
};
export default Noname;
