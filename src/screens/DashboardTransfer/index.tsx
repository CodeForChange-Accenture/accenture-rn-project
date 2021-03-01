import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import {
  Title,
  Content,
  ContentTitle,
  TransferContainer,
  Card,
  CardHead,
  CardTitle,
  CardBody,
  InputTransfer,
  CardFooter,
  Send,
  SendText,
} from "./style";
import { useNavigation } from "@react-navigation/native";
const DashboardTransfer: React.FC = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <TransferContainer>
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
              <CardTitle>Transferências</CardTitle>
            </CardHead>
            <CardBody>
              <InputTransfer placeholder="Destinatário" />
              <InputTransfer placeholder="Plano de conta a debitar" />
              <InputTransfer placeholder="Tipo de transação" />
              <InputTransfer
                placeholder="Valor da tranferência"
                keyboardType="numeric"
              />
            </CardBody>
            <CardFooter>
              <Send>
                <SendText>Realizar tranferência</SendText>
                <Feather name="arrow-right" color="white" size={20} />
              </Send>
            </CardFooter>
          </Card>
        </Content>
      </TransferContainer>
    </React.Fragment>
  );
};

export default DashboardTransfer;
