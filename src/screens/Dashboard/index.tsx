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
  BottomNavigation,
  NavOption,
  NavOptionTitle,
  SideBar,
  SidebarContentTitle,
} from "./style";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const Dashboard: React.FC = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  return (
    <DashboardContainer>
      {toggleSideBar && (
        <SideBar>
          <ScrollView>
            <SidebarContentTitle>
              <Feather name="user" color="violet" size={35} />
              <TouchableOpacity onPress={() => setToggleSideBar(false)}>
                <Feather name="x" color="violet" size={35} />
              </TouchableOpacity>
            </SidebarContentTitle>
          </ScrollView>
        </SideBar>
      )}
      <ScrollView onTouchStart={() => setToggleSideBar(false)}>
        <Content>
          <ContentTitle>
            <Title>Olá, Usuário</Title>
            <TouchableOpacity onPress={() => setToggleSideBar(true)}>
              <Feather name="user" color="white" size={35} />
            </TouchableOpacity>
          </ContentTitle>
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
        </Content>
      </ScrollView>
      <BottomNavigation>
        <TouchableOpacity>
          <NavOption>
            <Feather name="maximize-2" color="white" size={35} />
            <NavOptionTitle>Transferir</NavOptionTitle>
          </NavOption>
        </TouchableOpacity>
        <TouchableOpacity>
          <NavOption>
            <Feather name="book" color="white" size={35} />
            <NavOptionTitle>Lançamentos</NavOptionTitle>
          </NavOption>
        </TouchableOpacity>
        <TouchableOpacity>
          <NavOption>
            <Feather name="corner-down-right" color="white" size={35} />
            <NavOptionTitle>Depositar</NavOptionTitle>
          </NavOption>
        </TouchableOpacity>
        <TouchableOpacity>
          <NavOption>
            <Feather name="dollar-sign" color="white" size={35} />
            <NavOptionTitle>Planos</NavOptionTitle>
          </NavOption>
        </TouchableOpacity>
      </BottomNavigation>
    </DashboardContainer>
  );
};

export default Dashboard;
