import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";
import { Picker } from "@react-native-community/picker";
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
import api from "../../service";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import {
  ReloadAccountCredit,
  ReloadAccountRemove,
} from "../../store/modules/action";

import { IBank, IUser } from "../../interfaces";
import { useDispatch, useSelector } from "react-redux";

const DashboardTransfer: React.FC = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState<any>();
  const [tipoMovimento, setTipoMovimento] = useState("");
  const [destino, setDestino] = useState("");
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
      alert("Erro autenticação");
    }
  };
  const handleTransactionUser = async () => {
    const token = await AsyncStorage.getItem("@tokenApp");
    const login = await TokenDecodedValue();
    const today = new Date().toISOString().slice(0, 10);
    const valorParaNumero: number = +valor;

    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento === "TU"
    );

    const postData = {
      conta: state.banco.contaBanco.id,
      contaDestino: destino,
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
          alert("Transação realizada com sucesso!");
          dispatch(ReloadAccountRemove(valorParaNumero));
          console.log(tipoMovimento[0].tipoMovimento);

          setDestino("");
        } else {
          alert("Erro na transação");
        }
      })
      .catch(() => {
        alert("Erro na transação");
      });

    setDescricao("");
    setValor("");
  };

  const handleTransactionAccount = async () => {
    const token = await AsyncStorage.getItem("@tokenApp");
    const login = await TokenDecodedValue();
    const today = new Date().toISOString().slice(0, 10);
    const valorParaNumero: number = +valor;

    const tipoMovimento = state.plan.filter(
      (state) => state.tipoMovimento === "TC"
    );

    const postData = {
      conta: state.banco.contaBanco.id,
      contaDestino: destino,
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
          alert("Transação realizada com sucesso!");
          dispatch(ReloadAccountCredit(valorParaNumero));
        } else {
          alert("Erro na transação");
        }
      })
      .catch(() => {
        alert("Erro na transação");
      });

    setDestino("");
    setDescricao("");
    setValor("");
  };
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
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Conta crédito" value="credito" />
                <Picker.Item label="Usuário" value="usuario" />
              </Picker>
              {selectedValue === "usuario" && (
                <InputTransfer
                  placeholder="Destinatário"
                  value={destino}
                  onChangeText={(text) => setDestino(text)}
                />
              )}
              <InputTransfer
                placeholder="Descrição"
                value={descricao}
                onChangeText={(text) => setDescricao(text)}
              />
              <InputTransfer
                placeholder="Valor da tranferência"
                keyboardType="numeric"
                value={valor}
                onChangeText={(text) => setValor(text)}
              />
            </CardBody>
            <CardFooter>
              <TouchableOpacity
                onPress={
                  selectedValue === "usuario"
                    ? handleTransactionUser
                    : handleTransactionAccount
                }
              >
                <Send>
                  <SendText>Realizar tranferência</SendText>
                  <Feather name="arrow-right" color="white" size={20} />
                </Send>
              </TouchableOpacity>
            </CardFooter>
          </Card>
        </Content>
      </TransferContainer>
    </React.Fragment>
  );
};

export default DashboardTransfer;
