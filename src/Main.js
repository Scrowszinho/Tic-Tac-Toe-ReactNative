import React, { useState } from "react";
import { SafeAreaView, GameBox } from "./style/Styles";
import GamePoints from "./components/GamePoints";
import BoardButton from "./components/BoardButton";
import PlayerRound from "./components/PlayerRound";

export default function Connect() {
  const [player, setPlayer] = useState(1);
  const [winPoints, setWinPoints] = useState({ circle: 0, cross: 0 });
  const emptyGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [board, setBoard] = useState(emptyGame);

  function handleClick(row, column) {
    if (board[row][column] !== null) {
      return;
    } else {
      board[row][column] = player;
      setBoard(board);
    }
    if (player === 1) {
      setPlayer(-1);
    } else {
      setPlayer(1);
    }
    console.log(checkWinner());
  }

  function checkWinner() {
    let winner;
    for (let i = 0; i < 3; i++) {
      winner = board[i][0] + board[i][1] + board[i][2];
      if (winner === 3) {
        winPoints.cross++;
        setWinPoints(winPoints);
        setBoard(emptyGame);
      } else if (winner === -3) {
        winPoints.circle++;
        setWinPoints(winPoints);
        setBoard(emptyGame);
      } 
    }

    for (let i = 0; i < 3; i++) {
      winner = board[0][i] + board[1][i] + board[2][i];
      if (winner === 3) {
        winPoints.cross++;
        setWinPoints(winPoints);
        setBoard(emptyGame);
      } else if (winner === -3) {
        winPoints.circle++;
        setWinPoints(winPoints);
        setBoard(emptyGame);
      }
    }

    winner = board[0][0] + board[1][1] + board[2][2];
    if (winner === 3) {
      winPoints.cross++;
      setWinPoints(winPoints);
      setBoard(emptyGame);
    } else if (winner === -3) {
      winPoints.circle++;
      setWinPoints(winPoints);
      setBoard(emptyGame);
    }

    winner = board[0][2] + board[1][1] + board[2][0];
    if (winner === 3) {
      winPoints.cross++;
      setWinPoints(winPoints);
      setBoard(emptyGame);
    } else if (winner === -3) {
      winPoints.circle++;
      setWinPoints(winPoints);
      setBoard(emptyGame);
    } 
  }

  function resetGame() {
    setBoard(emptyGame);
    setPlayer(1);
    setWinPoints({ circle: 0, cross: 0 });
  }

  function renderButton() {
    let buttonList = [];
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        buttonList.push(
          <BoardButton
            key={Math.random(100,0)-0}
            row={row}
            column={column}
            board={board}
            handleClick={handleClick}
          />
        );
      }
    }
    return buttonList;
  }

  return (
    <SafeAreaView>
      <PlayerRound player={player} />
      <GameBox>{renderButton()}</GameBox>
      <GamePoints winPoints={winPoints} resetGame={resetGame} />
    </SafeAreaView>
  );
}
