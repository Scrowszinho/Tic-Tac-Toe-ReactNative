import React from 'react'
import {PlayerRoundBox, Text} from '../style/Styles';
import { Entypo } from '@expo/vector-icons';

export default function({player}){
    function whoPlayer(){
        switch (player) {
            case 1:
              return <Entypo name="cross" size={24} color='#fa8231' />;
              break;
            case -1:
              return <Entypo name="circle" size={24} color='#fa8231' />;
              break;
          }
    }
    return(
        <PlayerRoundBox>
            <Text>Now is</Text>
            {whoPlayer()}
        </PlayerRoundBox>
    )
}
