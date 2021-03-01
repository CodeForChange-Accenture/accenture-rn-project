import React from 'react'
import styled from 'styled-components/native'

export const SideBar = styled.View`
background:white;
position:absolute;
top: 0px;
left: 90px;
bottom: 0px;
right: 0px;
z-index: 1;
padding: 70px 30px;
`
export const SidebarContentTitle = styled.View `
justify-content:space-between;
align-items:center;
flex-direction:row;
text-align:center;
margin: 0 0 35px 0;
`
export const UserInfo = styled.Text`
color: #8C52E5;
font-size: 20px;
font-weight:bold;
`

export const Division = styled.View`
margin: 20px 0;
border: 1px solid #B9B9B9;
`

export const SidebarInfo = styled.Text`
color: #B9B9B9;
margin:10px 0
`