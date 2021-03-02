import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
//import { useDispatch, useSelector } from 'react-redux';
import BottomNavigation from "../../components/BottomNavigation";
import Sidebar from "../../components/Sidebar";
import { IBank, IUser } from '../../interfaces';
import DHistoric from "../../screens/DashboardLancamentos";
import api from '../../service';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Balance, Card,
  CardSubTitle, CardTitle, Content,
  ContentTitle, DashboardContainer,
  Historic, Title
} from "./style";

import {
  AddAccountInfos,
  LoadAccountPlans,
} from "../../store/modules/action";


const Dashboard: React.FC = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [navSelected, setNavSelected] = useState("");
  const [bankAction, setBankAction] = useState("");
  const [visible, setVisible] = useState(true);
  const [inicio, setInicio] = useState("2021-01-01");
  const [fim, setFim] = useState("2021-02-22");
  


  //const dispatch = useDispatch();
  //const state = useSelector((state: IBank) => state);



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

  useEffect(() => {
    async function loadBankInfo() {
      const token = await AsyncStorage.getItem("@tokenApp");
      const login = await TokenDecodedValue();
      const today = new Date().toISOString().slice(0, 10);
      await api
        .get(`dashboard?fim=${today}&inicio=${today}&login=${login}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((response) => {
          //dispatch(AddAccountInfos(response.data));
          console.log("Today: "+ JSON.stringify(response.data));
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
          //dispatch(LoadAccountPlans(response.data));
          console.log("Login: "+ JSON.stringify(response.data));

        });
    }
    loadBankInfo()
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
              <Title>Olá, Usuario</Title>
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
