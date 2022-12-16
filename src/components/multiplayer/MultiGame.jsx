import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Rock from "../../images/rock.png";
import Paper from "../../images/paper.png";
import Scissors from "../../images/scissors.png";
import "../../assets/multiplayer/MultiGame.css";
import { useEffect } from "react";

export const MultiGame = ({
  p1Play,
  p2Play,
  p1Win,
  p2Win,
  pDraw,
  selectedPP1,
  selectedPP2,
  selectedName1,
  selectedName2,
}) => {
  return (
    <div>
      <Container id="playCont" className="close">
        <Container id="cont">
          <Row>
            <Col xs="5" id="p1Cont" className="turn">
              <img className="ppBig" src={selectedPP1} alt="ppYou"></img>
              <h2>{selectedName1}</h2>
              <Button
                onClick={() => {
                  p1Play(document.getElementById("btnRockP1"), 0);
                }}
                id="btnRockP1"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Rock} alt="rock"></img>
              </Button>
              <Button
                onClick={() => {
                  p1Play(document.getElementById("btnPaperP1"), 1);
                }}
                id="btnPaperP1"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Paper} alt="paper"></img>
              </Button>
              <Button
                onClick={() => {
                  p1Play(document.getElementById("btnScissorsP1"), 2);
                }}
                id="btnScissorsP1"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Scissors} alt="scissors"></img>
              </Button>
            </Col>
            <Col xs="2">
              <h1>
                {p1Win} - {p2Win}
              </h1>
            </Col>
            <Col xs="5" id="p2Cont">
              <img className="ppBig" src={selectedPP2} alt="ppPc"></img>
              <h2>{selectedName2}</h2>
              <Button
                onClick={() => {
                  p2Play(document.getElementById("btnRockP2"), 0);
                }}
                id="btnRockP2"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Rock} alt="rock"></img>
              </Button>
              <Button
                onClick={() => {
                  p2Play(document.getElementById("btnPaperP2"), 1);
                }}
                id="btnPaperP2"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Paper} alt="paper"></img>
              </Button>
              <Button
                onClick={() => {
                  p2Play(document.getElementById("btnScissorsP2"), 2);
                }}
                id="btnScissorsP2"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Scissors} alt="scissors"></img>
              </Button>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <h4>
          {selectedName1} Win: {p1Win}
        </h4>
        <h4>Draw: {pDraw}</h4>
        <h4>
          {selectedName2} Win: {p2Win}
        </h4>
      </Container>
    </div>
  );
};
export default MultiGame;
