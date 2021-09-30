import React, { useEffect, useState } from "react";
import { SafeAreaView, GameBox, BoardButton, Text } from "./src/style/Styles";

export default function App() {
  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],     
    [null, null, null],
  ]);

  function handleClick(row, column) {
    if (board[row][column] !== null) {
      return;
    } else {
      board[row][column] = player;
      setBoard(board);
    } 
    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
    console.log(board, player);
  }

  

  return (
    <SafeAreaView>
      <GameBox>
        <BoardButton onPress={() => handleClick(0, 0)}><Text>{board[0][0]}</Text></BoardButton>
        <BoardButton onPress={() => handleClick(0, 1)}><Text>{board[0][1]}</Text></BoardButton>
        <BoardButton onPress={() => handleClick(0, 2)}><Text>{board[0][2]}</Text></BoardButton>
        <BoardButton onPress={() => handleClick(1, 0)}><Text>{board[1][0]}</Text></BoardButton>
        <BoardButton onPress={() => handleClick(1, 1)}><Text>{board[1][1]}</Text></BoardButton>
        <BoardButton onPress={() => handleClick(1, 2)}><Text>{board[1][2]}</Text></BoardButton>
        <BoardButton onPress={() => handleClick(2, 0)}><Text>{board[2][0]}</Text></BoardButton>
        <BoardButton onPress={() => handleClick(2, 1)}><Text>{board[2][1]}</Text></BoardButton>
        <BoardButton onPress={() => handleClick(2, 2)}><Text>{board[2][2]}</Text></BoardButton>
      </GameBox>
    </SafeAreaView>
  );
}
