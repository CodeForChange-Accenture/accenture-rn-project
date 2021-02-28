import React from 'react'
import styled from 'styled-components/native'

export const DashboardContainer = styled.View`
background: #8C52E5;
height: 100%;
`
export const Content = styled.View`
margin: 70px 30px;
`
export const ContentTitle = styled.View`
justify-content:space-between;
align-items:center;
flex-direction:row;
text-align:center;
margin: 0 0 30px;
`
export const Title = styled.Text`
color:#FBFBFB;
font-size: 26px;
`
export const Card = styled.View`
background-color:white;
margin: 10px 0;
min-height: 150px;
border-radius: 10px;
padding: 20px;
`

export const CardTitle = styled.Text`
color: #B9B9B9;
font-size: 20px;
font-weight:bold;
`
export const CardSubTitle = styled.Text`
margin: 10px 0 0;
color: #B9B9B9;
font-size: 18px;
`

export const Balance = styled.Text`
color: #34A6E7;
font-size: 28px;
`

export const Historic = styled.View`
margin: auto;
align-items: center;
`

export const BottomNavigation = styled.View`
height: 100px;
background:#68DE5A;
border-top-right-radius: 20px;
border-top-left-radius: 20px;
justify-content:space-around;
align-items:center;
flex-direction:row;
padding: 20px;
`
export const NavOption = styled.View`
align-items:center;
text-align:center;
`

export const NavOptionTitle = styled.Text`
color:white;
text-align:center;
`
export const SideBar = styled.View`
background:white;
position:absolute;
top: 0px;
left: 90px;
bottom: 0px;
right: 0px;
z-index: 1;
`
export const SidebarContentTitle = styled.View `
justify-content:space-between;
align-items:center;
flex-direction:row;
text-align:center;
margin: 70px 30px;
`