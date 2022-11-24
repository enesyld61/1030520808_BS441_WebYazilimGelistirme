/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../../assets/singleplayer/SingleChoose.css";
import { useEffect } from "react";
import ppBlue from "../../images/ppBlue.jpg";
import ppGreen from "../../images/ppGreen.jpg";
import ppRed from "../../images/ppRed.jpg";
import ppYellow from "../../images/ppYellow.jpg";
import ppPink from "../../images/ppPink.jpg";

export const SingleChoose = ({
  disable,
  setRound,
  setGameType,
  setDisable,
  round,
  selectedPP,
  setSelectedPP,
  selectedName,
  setSelectedName,
}) => {
  const start = () => {
    const playCont = document.getElementById("playCont");
    playCont.classList.remove("close");
    playCont.classList.add("open");
    const chooseCont = document.getElementById("chooseCont");
    chooseCont.classList.remove("open");
    chooseCont.classList.add("close");
  };

  const changePP = (pp, int) => {
    if (disable === true && selectedName !== "" && round !== 0) {
      setDisable(false);
    }
    for (let i = 0; i < 5; i++) {
      if (i !== int) {
        document.getElementById(`pp${i}`).classList.remove("selected");
      }
    }
    document.getElementById(`pp${int}`).classList.add("selected");
    setSelectedPP(pp);
  };

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
    if (selectedPP !== "" && selectedName !== "") {
      setDisable(false);
    }
    setRound(label);
    setGameType(type);
  };

  const nameChange = (event) => {
    setSelectedName(event.target.value);
  };

  useEffect(() => {
    if (selectedName !== "" && selectedPP !== "" && round !== 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [selectedName]);

  return (
    <div>
      <Container id="chooseCont" className="open">
        <h4>Select Avatar</h4>
        <img
          onClick={() => {
            changePP(ppRed, 0);
          }}
          className="ppImages"
          id="pp0"
          src={ppRed}
          alt="ppRed"
        />
        <img
          onClick={() => {
            changePP(ppBlue, 1);
          }}
          className="ppImages"
          id="pp1"
          src={ppBlue}
          alt="ppBlue"
        />
        <img
          onClick={() => {
            changePP(ppGreen, 2);
          }}
          className="ppImages"
          id="pp2"
          src={ppGreen}
          alt="ppGreen"
        />
        <img
          onClick={() => {
            changePP(ppYellow, 3);
          }}
          className="ppImages"
          id="pp3"
          src={ppYellow}
          alt="ppYellow"
        />
        <img
          onClick={() => {
            changePP(ppPink, 4);
          }}
          className="ppImages"
          id="pp4"
          src={ppPink}
          alt="ppPink"
        />
        <h4>Enter Name</h4>
        <Form.Control
          onChange={(e) => nameChange(e)}
          id="nameForm"
          type="text"
          placeholder="name"
        />
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
export default SingleChoose;
