import React from 'react'
import styled from 'styled-components/native'

export const SideBar = styled.View`
position:absolute;
z-index: 1;
height:100%;
width: 100%;
left: 80px;
`
export const SideBarContent = styled.View`
padding: 70px 30px;
background:white;
height:100%;
width: 80%;
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