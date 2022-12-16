/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import SingleChoose from "./SingleChoose";
import SingleGame from "./SingleGame";
import SingleResult from "./SingleResult";
import { useState, useEffect } from "react";
import SinglePreviousGames from "./SinglePreviousGames";

export const Singleplayer = () => {
  const [pWin, setWin] = useState(0);
  const [pLose, setLose] = useState(0);
  const [pDraw, setDraw] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [disable, setDisable] = useState(true);
  const [result, setResult] = useState([]);
  const [gameType, setGameType] = useState("");
  const [round, setRound] = useState(0);
  const [btns, setBtns] = useState([]);
  const [selectedPP, setSelectedPP] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [history, setHistory] = useState([]);
  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("previousSingle")));
    document.title = "Singleplayer";
  }, []);
  useEffect(() => {
    if (
      (gameType == "max" && currentRound == round) ||
      (gameType == "win" && (pWin == round || pLose == round))
    ) {
      setHistory((prevState) => [
        {
          pp: selectedPP,
          name: selectedName,
          score: `${pWin}-${pLose}`,
          result: result[1],
        },
        ...prevState,
      ]);
    }
  }, [result]);
  useEffect(() => {
    if (history[0] != null) {
      localStorage.setItem("previousSingle", JSON.stringify(history));
    }
  }, [history]);

  useEffect(() => {
    if (
      (gameType == "max" && currentRound == round) ||
      (gameType == "win" && (pWin == round || pLose == round))
    ) {
      if (pWin > pLose) {
        setResult(["You won!", "win"]);
      } else if (pWin < pLose) {
        setResult(["You lose!", "lose"]);
      } else {
        setResult(["Draw!", "draw"]);
      }
      setTimeout(gameEnd, 1000);
    } else if (currentRound != 0) {
      setTimeout(nextRound, 1000);
    }
  }, [currentRound]);

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
    document.getElementById("pCount").classList.remove("turn");
    setCurrentRound((prevState) => prevState + 1);
    setBtns([btn, pcBtn]);
  };

  const nextRound = () => {
    document.getElementById("cont").classList.remove("wait");
    document.getElementById("pCount").classList.add("turn");
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
    document.getElementById("pCount").classList.add("turn");
    setWin(0);
    setLose(0);
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
      <h1 id="single">Singleplayer</h1>
      <SingleGame
        play={play}
        pWin={pWin}
        pLose={pLose}
        pDraw={pDraw}
        selectedPP={selectedPP}
        selectedName={selectedName}
      />
      <SinglePreviousGames history={history} setHistory={setHistory} />
      <SingleChoose
        disable={disable}
        setRound={setRound}
        setGameType={setGameType}
        setDisable={setDisable}
        round={round}
        selectedPP={selectedPP}
        setSelectedPP={setSelectedPP}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
      />
      <SingleResult result={result[0]} playAgain={playAgain} />
    </div>
  );
};
export default Singleplayer;
