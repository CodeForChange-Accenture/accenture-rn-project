import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  DashboardContainer,
  Title,
  Content,
  Card,
  ContentTitle,
  CardTitle,
  Balance,
  CardSubTitle,
  Historic,
} from "./style";

import DHistoric from "../../screens/DashboardLancamentos";

import Sidebar from "../../components/Sidebar";
import BottomNavigation from "../../components/BottomNavigation";

import { TouchableOpacity, ScrollView, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dashboard: React.FC = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [navSelected, setNavSelected] = useState("");

  // testando para pegar o token
  const getToken = async () => {
    const token = await AsyncStorage.getItem("@tokenApp");
    console.log(token);
  };
  getToken();

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
                  </CardTitle>
                  <Balance>R$:1.890,00</Balance>
                </Card>
                <Card>
                  <CardTitle>
                    <Feather name="dollar-sign" size={20} /> Planos de conta
                  </CardTitle>
                  <CardSubTitle>Tipo de plano:</CardSubTitle>
                  <Balance>R$:1.890,00</Balance>
                </Card>
                <Card>
                  <CardTitle>
                    <Feather name="dollar-sign" size={20} /> Últimos lançamentos
                  </CardTitle>
                  <Historic>
                    <Balance>R$:1.890,00</Balance>
                    <CardSubTitle>11 de Fev</CardSubTitle>
                  </Historic>
                </Card>
              </React.Fragment>
            )}
          </Content>
        </ScrollView>
        <BottomNavigation setNavSelected={setNavSelected} />
      </DashboardContainer>
    </React.Fragment>
  );
};

export default Dashboard;
