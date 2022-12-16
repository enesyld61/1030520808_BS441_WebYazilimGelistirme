import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/multiplayer/MultiResult.css";

export const MultiResult = ({ result, playAgain }) => {
  return (
    <div>
      <Container id="resultCont" className="close">
        <h2 id="resultLabel">{result}</h2>
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
export default MultiResult;
