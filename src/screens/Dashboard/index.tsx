import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BottomNavigation from "../../components/BottomNavigation";
import Sidebar from "../../components/Sidebar";
import { IBank, IUser } from "../../interfaces";
import DHistoric from "../../screens/DashboardLancamentos";
import api from "../../service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Balance,
  Card,
  CardSubTitle,
  CardTitle,
  Content,
  ContentTitle,
  DashboardContainer,
  Historic,
  Title,
} from "./style";
import { AddAccountInfos, LoadAccountPlans } from "../../store/modules/action";
import { Division } from "../../components/Sidebar/style";
const Dashboard: React.FC = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [navSelected, setNavSelected] = useState("");
  const [inicio, setInicio] = useState(today);
  const [fim, setFim] = useState(today);

  const dispatch = useDispatch();
  const state = useSelector((state: IBank) => state);

  const navigation = useNavigation();

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
  async function loadBankInfo() {
    const token = await AsyncStorage.getItem("@tokenApp");
    const login = await TokenDecodedValue();

    await api
      .get(`dashboard?fim=${fim}&inicio=${inicio}&login=${login}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(AddAccountInfos(response.data));
      })
      .catch((e) => {
        alert("Ops, sua sessão está inspirada.");
        navigation.navigate("login");
      });

    await api
      .get(`/lancamentos/planos-conta?login=${login}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(LoadAccountPlans(response.data));
      });
  }
  useEffect(() => {
    loadBankInfo();
  }, []);
  return (
    <React.Fragment>
      {toggleSideBar && (
        <Sidebar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
      )}
      <DashboardContainer>
        <ScrollView onTouchStart={() => setToggleSideBar(false)}>
          <Content>
            <ContentTitle>
              <Title>Olá, Usuário</Title>
              <TouchableOpacity onPress={() => setToggleSideBar(true)}>
                <Feather name="user" color="white" size={35} />
              </TouchableOpacity>
            </ContentTitle>
            {navSelected === "historic" ? (
              <DHistoric />
            ) : (
              <React.Fragment>
                <Card>
                  <CardTitle>
                    <Feather name="dollar-sign" size={20} /> Saldo da conta
                    débito
                  </CardTitle>
                  <Balance>
                    R$ {state.banco.contaBanco.saldo.toFixed(2)}
                  </Balance>
                  <CardTitle>
                    <Feather name="dollar-sign" size={20} /> Saldo da conta
                    crédito
                  </CardTitle>
                  <Balance>
                    R$ {state.banco.contaCredito.saldo.toFixed(2)}
                  </Balance>
                </Card>
                <Card>
                  <CardTitle>
                    <Feather name="dollar-sign" size={20} /> Planos de conta
                  </CardTitle>
                  {state.plan.map((plans, index) => (
                    <View key={index}>
                      <Division />
                      <CardTitle>Tipo de plano: {plans.descricao}</CardTitle>
                      <CardSubTitle>ID: {plans.id}</CardSubTitle>
                    </View>
                  ))}
                </Card>
                <Card>
                  <CardTitle>
                    <Feather name="dollar-sign" size={20} /> Últimos lançamentos
                  </CardTitle>
                  {state.banco.contaBanco.lancamentos.map(
                    (lancamentos, index) => (
                      <Historic key={index}>
                        <Balance>{lancamentos.valor.toFixed(2)}</Balance>
                        <CardSubTitle>{lancamentos.data}</CardSubTitle>
                      </Historic>
                    )
                  )}
                </Card>
              </React.Fragment>
            )}
          </Content>
        </ScrollView>
        <BottomNavigation
          setNavSelected={setNavSelected}
          loadBankInfo={loadBankInfo}
        />
      </DashboardContainer>
    </React.Fragment>
  );
};

export default Dashboard;
