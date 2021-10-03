import React from "react";
import { BoardButton, Text } from "../style/Styles";
import { Entypo } from "@expo/vector-icons";
export default function ({ board, handleClick, row, column }) {
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
  
  return (
    <BoardButton onPress={() => handleClick(row, column)}>
      <Text>{checkPlayer(row, column)}</Text>
    </BoardButton>
  );
}
