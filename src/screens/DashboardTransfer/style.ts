import styled from 'styled-components/native'

export const TransferContainer = styled.View`
background:#E5E5E5;
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
color:#8C52E5;
font-size: 26px;
`

export const Card = styled.View`
background-color:white;
margin: 10px 0;
min-height: 600px;
border-radius: 10px;
padding: 20px;
`

export const CardHead = styled.View`
flex-direction:row;
align-items:center;
`
export const CardTitle = styled.Text`
color: #B9B9B9;
font-size: 20px;
font-weight:bold;
margin-left: 15px;
`
export const CardBody = styled.View`
margin-top: 70px;
min-height: 300px;
`
export const InputTransfer = styled.TextInput`
border: 2px solid white;
border-bottom-color: #B9B9B9;
margin: 20px 10px;
padding: 5px;
font-size: 20px;
`
export const CardFooter = styled.View`
justify-content:center;
min-height: 100px;
margin-top: 25px;
`
export const Send = styled.View`

min-height: 65px;
background:#68DE5A;
margin: 20px 10px;
border-radius: 20px;
padding: 20px;
justify-content:space-between;
align-items:center;
flex-direction:row;
`
export const SendText = styled.Text`
color: white;
font-size: 18px;
`