import React, { useEffect, useState } from "react";
import { SafeAreaView, GameBox, BoardButton, Text, GamePoints,ReplayButton } from "./src/style/Styles";
import { Entypo, MaterialCommunityIcons  } from "@expo/vector-icons";
import {TouchableOpacity} from 'react-native'
export default function App() {
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
    return 0;
  }

  function checkPlayer(row, column) {
    switch (board[row][column]) {
      case 1:
        return <Entypo name="cross" size={35} />;
        break;
      case -1:
        return <Entypo name="circle" size={24} />;
        break;
    }
  }

  function resetGame(){
    setBoard(emptyGame);
    setPlayer(1);
    setWinPoints({ circle: 0, cross: 0 });
  }

  return (
    <SafeAreaView>
      <GameBox>
        <BoardButton onPress={() => handleClick(0, 0)}>
          <Text>{checkPlayer(0, 0)}</Text>
        </BoardButton>
        <BoardButton onPress={() => handleClick(0, 1)}>
          <Text>{checkPlayer(0, 1)}</Text>
        </BoardButton>
        <BoardButton onPress={() => handleClick(0, 2)}>
          <Text>{checkPlayer(0, 2)}</Text>
        </BoardButton>
        <BoardButton onPress={() => handleClick(1, 0)}>
          <Text>{checkPlayer(1, 0)}</Text>
        </BoardButton>
        <BoardButton onPress={() => handleClick(1, 1)}>
          <Text>{checkPlayer(1, 1)}</Text>
        </BoardButton>
        <BoardButton onPress={() => handleClick(1, 2)}>
          <Text>{checkPlayer(1, 2)}</Text>
        </BoardButton>
        <BoardButton onPress={() => handleClick(2, 0)}>
          <Text>{checkPlayer(2, 0)}</Text>
        </BoardButton>
        <BoardButton onPress={() => handleClick(2, 1)}>
          <Text>{checkPlayer(2, 1)}</Text>
        </BoardButton>
        <BoardButton onPress={() => handleClick(2, 2)}>
          <Text>{checkPlayer(2, 2)}</Text>
        </BoardButton>
      </GameBox>
      <GamePoints>
      <Text>
        <Entypo name="cross" size={24} /> - {winPoints.cross}
      </Text>
      <TouchableOpacity onPress={()=>resetGame()}><MaterialCommunityIcons  name='replay' size={35} color='#fa8231'/></TouchableOpacity>
      <Text>
        <Entypo name="circle" size={24} /> - {winPoints.circle}
      </Text>
      </GamePoints>
    </SafeAreaView>
  );
}
