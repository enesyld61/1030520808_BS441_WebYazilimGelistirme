/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Button,
  Collapse,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import "../../assets/multiplayer/MultiPreviousGames.css";

export const MultiPreviousGames = ({ history, setHistory }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && history[0] != null) {
      document.getElementById("btnDeleteHistory").classList.add("open");
      document.getElementById("btnDeleteHistory").classList.remove("close");
    } else {
      document.getElementById("btnDeleteHistory").classList.add("close");
      document.getElementById("btnDeleteHistory").classList.remove("open");
    }
  }, [open]);

  useEffect(() => {
    if (history[0] != null) {
      document.getElementById("btnHistory").classList.remove("close");
      if (open) {
        document.getElementById("btnDeleteHistory").classList.add("open");
        document.getElementById("btnDeleteHistory").classList.remove("close");
      }
    } else {
      document.getElementById("btnHistory").classList.add("close");
    }
  }, [history]);

  return (
    <div id="collapseFull">
      <div id="btnsDiv">
        <Button
          variant="outline-secondary"
          id="btnHistory"
          onClick={() => {
            setOpen(!open);
          }}
          aria-controls="collapse-text"
          aria-expanded={open}
        >
          ↺
        </Button>
        <Button
          id="btnDeleteHistory"
          className="close"
          variant="danger"
          onClick={() => {
            setHistory([]);
            localStorage.setItem("previousSingle", JSON.stringify([]));
            document.getElementById("btnDeleteHistory").classList.add("close");
            document
              .getElementById("btnDeleteHistory")
              .classList.remove("open");
            setOpen(!open);
          }}
        >
          🗑
        </Button>
      </div>
      <Container id="collapse-text">
        <Collapse in={open}>
          <ListGroup>
            {/* {history[0] != null ? (
              history.map((result) => (
                <ListGroupItem
                  className={`resultListItem ${result.result}`}
                  key={history.indexOf(result)}
                >
                  <img className="resultPP" src={result.pp1} alt="pp" />{" "}
                  <h5 className="resultWriting">{result.name1}</h5>{" "}
                  <h5 className="resultWriting">{result.score}</h5>{" "}
                  <h5 className="resultWriting">{result.name2}</h5>{" "}
                  <img className="resultPP" src={result.pp2} alt="pp" />
                </ListGroupItem>
              ))
            ) : (
              <div>dsad</div>
            )} */}
            {history.map((result) => (
              <ListGroupItem
                className={`resultListItem ${result.result}`}
                key={history.indexOf(result)}
              >
                <img className="resultPP" src={result.pp1} alt="pp" />{" "}
                <h5 className="resultWriting">{result.name1}</h5>{" "}
                <h5 className="resultWriting">{result.score}</h5>{" "}
                <h5 className="resultWriting">{result.name2}</h5>{" "}
                <img className="resultPP" src={result.pp2} alt="pp" />
              </ListGroupItem>
            ))}
          </ListGroup>
        </Collapse>
      </Container>
    </div>
  );
};
export default MultiPreviousGames;
