import { Container, Row, Col, Button } from "react-bootstrap";
import Rock from "../../images/rock.png";
import Paper from "../../images/paper.png";
import Scissors from "../../images/scissors.png";
import "../../assets/singleplayer/SingleGame.css";
import ppGray from "../../images/ppGray.jpg";
export const SingleGame = ({
  play,
  pWin,
  pLose,
  pDraw,
  selectedPP,
  selectedName,
}) => {
  return (
    <div>
      <Container id="playCont" className="close">
        <Container id="cont">
          <Row>
            <Col xs="5" id="pCount" className="turn">
              <img className="ppBig" src={selectedPP} alt="ppYou"></img>
              <h2>{selectedName}</h2>
              <Button
                onClick={() => {
                  play(document.getElementById("btnRock"), 0);
                }}
                id="btnRock"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Rock} alt="rock"></img>
              </Button>
              <Button
                onClick={() => {
                  play(document.getElementById("btnPaper"), 1);
                }}
                id="btnPaper"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Paper} alt="paper"></img>
              </Button>
              <Button
                onClick={() => {
                  play(document.getElementById("btnScissors"), 2);
                }}
                id="btnScissors"
                className="imgBtn"
                variant="light"
              >
                <img className="images" src={Scissors} alt="scissors"></img>
              </Button>
            </Col>
            <Col xs="2">
              <h1>
                {pWin} - {pLose}
              </h1>
            </Col>
            <Col xs="5">
              <img className="ppBig" src={ppGray} alt="ppPc"></img>
              <h2>Bot</h2>
              <Button id="pcBtn0" className="imgBtn" variant="light" disabled>
                <img className="images" src={Rock} alt="rock"></img>
              </Button>
              <Button id="pcBtn1" className="imgBtn" variant="light" disabled>
                <img className="images" src={Paper} alt="paper"></img>
              </Button>
              <Button id="pcBtn2" className="imgBtn" variant="light" disabled>
                <img className="images" src={Scissors} alt="scissors"></img>
              </Button>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <h4>Win: {pWin}</h4>
        <h4>Draw: {pDraw}</h4>
        <h4>Lose: {pLose}</h4>
      </Container>
    </div>
  );
};
export default SingleGame;
