import React from "react";
import {GamePoints,Text} from "../style/Styles";
import {TouchableOpacity} from 'react-native'
import { Entypo, MaterialCommunityIcons  } from "@expo/vector-icons";

export default ({winPoints, resetGame}) => (
  <GamePoints>
    <Text>
      <Entypo name="cross" size={24} /> - {winPoints.cross}
    </Text>
    <TouchableOpacity onPress={() => resetGame()}>
      <MaterialCommunityIcons name="replay" size={35} color="#fa8231" />
    </TouchableOpacity>
    <Text>
      {winPoints.circle} - <Entypo name="circle" size={24} />
    </Text>
  </GamePoints>
);
