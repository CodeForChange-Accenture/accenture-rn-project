import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { toast } from ' react-toastify';

import { useDispatch, useSelector} from 'react-redux';

import jwt_decode from 'jwt-decode'

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
import DTransfer from "../DashboardTransfer";
import D_Deposit from "../DashboardDeposit";
import DPlans from "../DashboardPlans";

import Sidebar from "../../components/Sidebar";
import BottomNavigation from "../../components/BottomNavigation";

import { TouchableOpacity, ScrollView, View, Text } from "react-native";
const Dashboard: React.FC = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [navSelected, setNavSelected] = useState("");
  const [bankAction, setBankAction] = useState("");
  const [visible, setVisible] = useState(true);
  const [inicio, setInicio] = useState("2021-01-01");
  const [fim, setFim] = useState("2021-02-22");


  const dispatch = useDispatch();
  const state = useSelector((state: IBank) => state);
  const TokenStorage = null || localStorage.getItem("@tokenApp");


  const TokenDecodedValue = () => {
    if (TokenStorage) {
      const TokenArr = TokenStorage.split(" ");
      const TokenDecode = TokenArr[1];
      const decoded = jwt_decode<IUser>(TokenDecode);
      return decoded.sub;
    } else {
        toast.error("Erro autenticação");
    }
  };

  const login = TokenDecodedValue();


  useEffect(() => {
    async function loadBankInfo() {
      await api
        .get(`dashboard?fim=${fim}&inicio=${inicio}&login=${login}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("@tokenApp"),
          },
        })
        .then((response) => {
          dispatch(AddAccountInfos(response.data));
        })
        .catch((e) => {
          localStorage.clear();
          toast.error("Ops, sua sessão está inspirada.");
          history.push("/login");
        });
    }

    async function loadAccount() {
      await api
        .get(`/lancamentos/planos-conta?login=${login}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("@tokenApp"),
          },
        })
        .then((response) => {
          dispatch(LoadAccountPlans(response.data));
        });
    }
    loadBankInfo();
    loadAccount();
  }, [inicio, fim]);


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
