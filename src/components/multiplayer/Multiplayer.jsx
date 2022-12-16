/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import MultiChoose from "./MultiChoose";
import MultiGame from "./MultiGame";
import MultiResult from "./MultiResult";
import { useState, useEffect } from "react";
import MultiPreviousGames from "./MultiPreviousGames";

export const Multiplayer = () => {
  const [p1Win, setP1Win] = useState(0);
  const [p2Win, setP2Win] = useState(0);
  const [pDraw, setDraw] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [disable, setDisable] = useState(true);
  const [result, setResult] = useState([]);
  const [gameType, setGameType] = useState("");
  const [round, setRound] = useState(0);
  const [btns, setBtns] = useState([]);
  const [selectedPP1, setSelectedPP1] = useState("");
  const [selectedPP2, setSelectedPP2] = useState("");
  const [selectedName1, setSelectedName1] = useState("");
  const [selectedName2, setSelectedName2] = useState("");
  const [history, setHistory] = useState([]);
  const [intP1, setIntP1] = useState(null);
  const [intP2, setIntP2] = useState(null);

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("previousMulti")));
    document.title = "Multiplayer";
  }, []);

  useEffect(() => {
    if (
      (gameType == "max" && currentRound == round) ||
      (gameType == "win" && (p1Win == round || p2Win == round))
    ) {
      setHistory((prevState) => [
        {
          pp1: selectedPP1,
          pp2: selectedPP2,
          name1: selectedName1,
          name2: selectedName2,
          score: `${p1Win}-${p2Win}`,
          result: result[1],
        },
        ...prevState,
      ]);
    }
  }, [result]);

  useEffect(() => {
    if (history[0] != null) {
      localStorage.setItem("previousMulti", JSON.stringify(history));
    }
  }, [history]);

  useEffect(() => {
    if (
      (gameType == "max" && currentRound == round) ||
      (gameType == "win" && (p1Win == round || p2Win == round))
    ) {
      if (p1Win > p2Win) {
        setResult([`${selectedName1} won!`, "win"]);
      } else if (p1Win < p2Win) {
        setResult([`${selectedName2} won!`, "lose"]);
      } else {
        setResult(["Draw!", "draw"]);
      }
      setTimeout(gameEnd, 1000);
    } else if (currentRound != 0) {
      setTimeout(nextRound, 1000);
    }
  }, [currentRound]);

  const winP1 = (p1Btn, p2Btn) => {
    p1Btn.classList.add("green");
    p2Btn.classList.add("red");
    setP1Win((prevState) => prevState + 1);
  };

  const draw = (p1Btn, p2Btn) => {
    p1Btn.classList.add("gray");
    p2Btn.classList.add("gray");
    setDraw((prevState) => prevState + 1);
  };

  const winP2 = (p1Btn, p2Btn) => {
    p1Btn.classList.add("red");
    p2Btn.classList.add("green");
    setP2Win((prevState) => prevState + 1);
  };

  const p1Play = (btn, int) => {
    setBtns([btn]);
    setIntP1(int);
    document.getElementById("p1Cont").classList.add("disable");
    document.getElementById("p2Cont").classList.remove("disable");
    document.getElementById("p1Cont").classList.remove("turn");
    document.getElementById("p2Cont").classList.add("turn");
  };
  const p2Play = (btn, int) => {
    setBtns([...btns, btn]);
    setIntP2(int);
    document.getElementById("p2Cont").classList.add("disable");
    document.getElementById("p2Cont").classList.remove("turn");
  };

  useEffect(() => {
    if (intP2 != null) {
      if (intP1 === 0) {
        if (intP2 === 0) {
          draw(btns[0], btns[1]);
        } else if (intP2 === 1) {
          winP2(btns[0], btns[1]);
        } else {
          winP1(btns[0], btns[1]);
        }
      } else if (intP1 === 1) {
        if (intP2 === 0) {
          winP1(btns[0], btns[1]);
        } else if (intP2 === 1) {
          draw(btns[0], btns[1]);
        } else {
          winP2(btns[0], btns[1]);
        }
      } else {
        if (intP2 === 0) {
          winP2(btns[0], btns[1]);
        } else if (intP2 === 1) {
          winP1(btns[0], btns[1]);
        } else {
          draw(btns[0], btns[1]);
        }
      }
      document.getElementById("cont").classList.add("wait");
      setCurrentRound((prevState) => prevState + 1);
      setIntP1(null);
      setIntP2(null);
    }
  }, [intP2]);

  const nextRound = () => {
    document.getElementById("cont").classList.remove("wait");
    document.getElementById("p1Cont").classList.remove("disable");
    document.getElementById("p1Cont").classList.add("turn");
    document.getElementById("p2Cont").classList.remove("turn");
    for (let btn of btns) {
      btn.classList.remove("red");
      btn.classList.remove("gray");
      btn.classList.remove("green");
    }
  };

  const gameEnd = () => {
    const resultCont = document.getElementById("resultCont");
    resultCont.classList.remove("close");
    resultCont.classList.add("open");
  };

  const clearHistory = () => {
    document.getElementById("p1Cont").classList.remove("disable");
    document.getElementById("p1Cont").classList.add("turn");
    document.getElementById("p2Cont").classList.remove("turn");
    setP1Win(0);
    setP2Win(0);
    setDraw(0);
    setCurrentRound(0);
    for (let btn of btns) {
      btn.classList.remove("red");
      btn.classList.remove("gray");
      btn.classList.remove("green");
    }
  };

  const playAgain = () => {
    const resultCont = document.getElementById("resultCont");
    resultCont.classList.remove("open");
    resultCont.classList.add("close");
    document.getElementById("cont").classList.remove("wait");
    document.getElementById("playCont").classList.add("close");
    document.getElementById("playCont").classList.remove("open");
    document.getElementById("chooseCont").classList.add("open");
    document.getElementById("chooseCont").classList.remove("close");
    setTimeout(() => clearHistory(), 500);
  };

  return (
    <div>
      <h1>Multiplayer</h1>
      <MultiGame
        p1Play={p1Play}
        p2Play={p2Play}
        p1Win={p1Win}
        p2Win={p2Win}
        pDraw={pDraw}
        selectedPP1={selectedPP1}
        selectedPP2={selectedPP2}
        selectedName1={selectedName1}
        selectedName2={selectedName2}
      />
      <MultiPreviousGames history={history} setHistory={setHistory} />
      <MultiChoose
        disable={disable}
        setRound={setRound}
        setGameType={setGameType}
        setDisable={setDisable}
        round={round}
        selectedPP1={selectedPP1}
        selectedPP2={selectedPP2}
        setSelectedPP1={setSelectedPP1}
        setSelectedPP2={setSelectedPP2}
        selectedName1={selectedName1}
        selectedName2={selectedName2}
        setSelectedName1={setSelectedName1}
        setSelectedName2={setSelectedName2}
      />
      <MultiResult result={result[0]} playAgain={playAgain} />
    </div>
  );
};
export default Multiplayer;
