import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import {
  Title,
  Content,
  ContentTitle,
  DepositContainer,
  Card,
  CardHead,
  CardTitle,
  CardBody,
  InputDeposit,
  CardFooter,
  Send,
  SendText,
} from "./style";
import { useNavigation } from "@react-navigation/native";
const DashboardDeposit: React.FC = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <DepositContainer>
        <Content>
          <ContentTitle>
            <Title>Olá, Usuário</Title>
            <TouchableOpacity onPress={navigation.goBack}>
              <Feather name="x" color="#8C52E5" size={35} />
            </TouchableOpacity>
          </ContentTitle>
          <Card>
            <CardHead>
              <Feather name="dollar-sign" color="#B9B9B9" size={35} />
              <CardTitle>Depósitos</CardTitle>
            </CardHead>
            <CardBody>
              <InputDeposit placeholder="Destinatário" />
              <InputDeposit placeholder="Plano de conta" />
              <InputDeposit placeholder="Tipo de transação" />
              <InputDeposit
                placeholder="Valor do depósito"
                keyboardType="numeric"
              />
            </CardBody>
            <CardFooter>
              <Send>
                <SendText>Realizar depósito</SendText>
                <Feather name="arrow-right" color="white" size={20} />
              </Send>
            </CardFooter>
          </Card>
        </Content>
      </DepositContainer>
    </React.Fragment>
  );
};

export default DashboardDeposit;
