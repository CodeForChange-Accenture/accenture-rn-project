import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

/* const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; */

export const Container = styled.View`
background: #8C52E5;
align-items: center;
flex: 1;
`
export const LogoGama = styled.Image`
  margin-top: 86px;
  width: 249px;
  height: 55px;
`
export const Card = styled.View`
background-color:white;
margin: 30px;
margin-top: 75px;
max-width: 100%;
border-radius: 10px;
padding: 37px;
`
export const CardTitle = styled.Text`
color: #1D1D1D;
font-size: 21px;
line-height: 25px;
font-weight: 500;
align-items: center;
margin-bottom: 30px; 
`
export const Form = styled.View`
color: #878686;
font-family: Roboto;
font-weight: 500;
font-size: 14px;
padding-bottom: 10px;
margin-bottom: 30px; 
`
export const TextInput = styled.TextInput`
border: none;
font-size: 14px;
line-height: 14px;
align-items: center;
font-weight: 500;
margin-bottom: 25px;
border: 2px solid white;
border-bottom-color: #878686;
`
export const SubmitButton = styled.TouchableOpacity` 
padding: 12px;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: #68DE5A;
border-radius: 20px;
`
export const SubmitText = styled.Text`
color: #fff;
font-size: 18px;
`
export const ButtonLink = styled.TouchableOpacity` 
margin-top: 15px;
align-items: center;
`