import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
display:flex;
flex:3;
background-color: #f0f0f0;
justify-content:center;
align-items:center;
`;

export const GameBox = styled.View`
display: flex;
height: 300px;
width: 300px;
flex-direction: row;
background-color: aliceblue;
flex-wrap: wrap;
`;

export const BoardButton = styled.TouchableOpacity`
flex:1;
background-color: #2a282a;
width:100px;
height: 100px;
min-width: 96px;
margin:1px;
align-items: center;
justify-content: center;
`;

export const Text = styled.Text`
color: #fa8231;
font-size: 25px;
`;

export const GamePoints = styled.View`
background-color: #2a282a;
display: flex;
width: 300px;
padding: 20px;
justify-content: space-between;
margin-top: 20px;
flex-direction: row;
`;

export const ReplayButton = styled.TouchableOpacity`
display:flex;
justify-items: center;
`;