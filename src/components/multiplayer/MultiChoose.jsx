/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/multiplayer/MultiChoose.css";
import { useEffect } from "react";
import ppBlue from "../../images/ppBlue.jpg";
import ppGreen from "../../images/ppGreen.jpg";
import ppRed from "../../images/ppRed.jpg";
import ppYellow from "../../images/ppYellow.jpg";
import ppPink from "../../images/ppPink.jpg";

export const MultiChoose = ({
  disable,
  setRound,
  setGameType,
  setDisable,
  round,
  selectedPP1,
  selectedPP2,
  setSelectedPP1,
  setSelectedPP2,
  selectedName1,
  selectedName2,
  setSelectedName1,
  setSelectedName2,
}) => {
  const changePP1 = (pp, int) => {
    if (
      disable === true &&
      selectedName1 !== "" &&
      selectedName2 !== "" &&
      selectedPP2 !== "" &&
      round !== 0
    ) {
      setDisable(false);
    }
    for (let i = 0; i < 5; i++) {
      if (i !== int) {
        document.getElementById(`pp1-${i}`).classList.remove("selected");
      }
    }
    document.getElementById(`pp1-${int}`).classList.add("selected");
    setSelectedPP1(pp);
  };

  const changePP2 = (pp, int) => {
    if (
      disable === true &&
      selectedName1 !== "" &&
      selectedName2 !== "" &&
      selectedPP1 !== "" &&
      round !== 0
    ) {
      setDisable(false);
    }
    for (let i = 0; i < 5; i++) {
      if (i !== int) {
        document.getElementById(`pp2-${i}`).classList.remove("selected");
      }
    }
    document.getElementById(`pp2-${int}`).classList.add("selected");
    setSelectedPP2(pp);
  };

  const nameChange1 = (event) => {
    setSelectedName1(event.target.value);
  };

  const nameChange2 = (event) => {
    setSelectedName2(event.target.value);
  };

  useEffect(() => {
    if (
      selectedName1 !== "" &&
      selectedName2 !== "" &&
      selectedPP1 !== "" &&
      selectedPP2 !== "" &&
      round !== 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [selectedName1, selectedName2]);

  const radioChange = (label, type) => {
    if (type === "max") {
      for (let i = 3; i < 11; i = i + 2) {
        document.getElementById(`winRadio${i}`).checked = false;
      }
    } else {
      for (let i = 3; i < 11; i = i + 2) {
        document.getElementById(`maxRadio${i}`).checked = false;
      }
    }
    if (
      selectedPP1 !== "" &&
      selectedPP2 !== "" &&
      selectedName1 !== "" &&
      selectedName1 !== ""
    ) {
      setDisable(false);
    }
    setRound(label);
    setGameType(type);
  };

  const start = () => {
    const playCont = document.getElementById("playCont");
    playCont.classList.remove("close");
    playCont.classList.add("open");
    const chooseCont = document.getElementById("chooseCont");
    chooseCont.classList.remove("open");
    chooseCont.classList.add("close");
  };

  return (
    <div>
      <Container id="chooseCont" className="open">
        <Row>
          <Col xs="6">
            <h3>Player1</h3>
            <h4>Select Avatar</h4>
            <img
              onClick={() => {
                changePP1(ppRed, 0);
              }}
              className="ppImages"
              id="pp1-0"
              src={ppRed}
              alt="ppRed"
            />
            <img
              onClick={() => {
                changePP1(ppBlue, 1);
              }}
              className="ppImages"
              id="pp1-1"
              src={ppBlue}
              alt="ppBlue"
            />
            <img
              onClick={() => {
                changePP1(ppGreen, 2);
              }}
              className="ppImages"
              id="pp1-2"
              src={ppGreen}
              alt="ppGreen"
            />
            <img
              onClick={() => {
                changePP1(ppYellow, 3);
              }}
              className="ppImages"
              id="pp1-3"
              src={ppYellow}
              alt="ppYellow"
            />
            <img
              onClick={() => {
                changePP1(ppPink, 4);
              }}
              className="ppImages"
              id="pp1-4"
              src={ppPink}
              alt="ppPink"
            />
            <h4>Enter Name</h4>
            <Form.Control
              onChange={(e) => nameChange1(e)}
              id="nameForm1"
              type="text"
              placeholder="name"
            />
          </Col>
          <Col xs="6">
            <h3>Player2</h3>
            <h4>Select Avatar</h4>
            <img
              onClick={() => {
                changePP2(ppRed, 0);
              }}
              className="ppImages"
              id="pp2-0"
              src={ppRed}
              alt="ppRed"
            />
            <img
              onClick={() => {
                changePP2(ppBlue, 1);
              }}
              className="ppImages"
              id="pp2-1"
              src={ppBlue}
              alt="ppBlue"
            />
            <img
              onClick={() => {
                changePP2(ppGreen, 2);
              }}
              className="ppImages"
              id="pp2-2"
              src={ppGreen}
              alt="ppGreen"
            />
            <img
              onClick={() => {
                changePP2(ppYellow, 3);
              }}
              className="ppImages"
              id="pp2-3"
              src={ppYellow}
              alt="ppYellow"
            />
            <img
              onClick={() => {
                changePP2(ppPink, 4);
              }}
              className="ppImages"
              id="pp2-4"
              src={ppPink}
              alt="ppPink"
            />
            <h4>Enter Name</h4>
            <Form.Control
              onChange={(e) => nameChange2(e)}
              id="nameForm2"
              type="text"
              placeholder="name"
            />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col xs="6">
            <h2>Max Round</h2>
            <Form>
              {["3", "5", "7", "9"].map((label) => (
                <div key={`maxRadio-${label}`}>
                  <Form.Check
                    inline
                    label={label}
                    name="group1"
                    type="radio"
                    id={`maxRadio${label}`}
                    onChange={() => radioChange(label, "max")}
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col xs="6">
            <h2>Winning Round</h2>
            <Form>
              {["3", "5", "7", "9"].map((label) => (
                <div key={`winRadio-${label}`}>
                  <Form.Check
                    inline
                    label={label}
                    name="group2"
                    type="radio"
                    id={`winRadio${label}`}
                    onChange={() => radioChange(label, "win")}
                  />
                </div>
              ))}
            </Form>
          </Col>
        </Row>
        <Button
          disabled={disable}
          id="btnPlay"
          variant="primary"
          onClick={() => start()}
        >
          Play
        </Button>
      </Container>
    </div>
  );
};
export default MultiChoose;
