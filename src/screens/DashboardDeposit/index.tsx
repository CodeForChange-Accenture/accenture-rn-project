import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Alert, TouchableOpacity } from "react-native";
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
import api from "../../service";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { IBank, IUser } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { ReloadAccountAdd } from "../../store/modules/action";
const DashboardDeposit: React.FC = () => {
  const navigation = useNavigation();
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state: IBank) => state);

  const TokenDecodedValue = async () => {
    const TokenStorage = await AsyncStorage.getItem("@tokenApp");
    if (TokenStorage) {
      const TokenArr = TokenStorage.split(" ");
      const TokenDecode = TokenArr[1];
      const decoded = jwt_decode<IUser>(TokenDecode);
      return decoded.sub;
    } else {
      Alert.alert("Erro!", "Erro na autenticação");
    }
  };

  const handleDeposit = async () => {
    const token = await AsyncStorage.getItem("@tokenApp");
    const valorParaNumero: number = +valor;
    const login = await TokenDecodedValue();
    const today = new Date().toISOString().slice(0, 10);

    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento === "R"
    );

    const postData = {
      conta: state.banco.contaBanco.id,
      data: today,
      descricao: descricao,
      login: login,
      planoConta: tipoMovimento[0].id,
      valor: valorParaNumero,
    };
    api
      .post(`lancamentos`, postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          Alert.alert("Deposito realizado com sucesso!");
          dispatch(ReloadAccountAdd(valorParaNumero));
        } else {
          Alert.alert("Erro na transação", "Valores inválidos");
        }
      })
      .catch(() => {
        Alert.alert("Erro na transação", "Valores inválidos");
      });
    setDescricao("");
    setValor("");
  };

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
              <InputDeposit
                placeholder="Descrição"
                value={descricao}
                onChangeText={(text) => setDescricao(text)}
              />
              <InputDeposit
                placeholder="Valor do depósito"
                keyboardType="numeric"
                value={valor}
                onChangeText={(text) => setValor(text)}
              />
            </CardBody>
            <CardFooter>
              <TouchableOpacity onPress={handleDeposit}>
                <Send>
                  <SendText>Realizar depósito</SendText>
                  <Feather name="arrow-right" color="white" size={20} />
                </Send>
              </TouchableOpacity>
            </CardFooter>
          </Card>
        </Content>
      </DepositContainer>
    </React.Fragment>
  );
};

export default DashboardDeposit;
