import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  SideBar,
  SidebarContentTitle,
  SidebarInfo,
  UserInfo,
  SideBarContent,
  Division,
} from "./style";
import { TouchableOpacity, ScrollView, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";
import { IBank } from "../../interfaces";

type SidebarState = {
  setToggleSideBar: Function;
  toggleSideBar?: boolean;
};

export default function Sidebar({
  setToggleSideBar,
  toggleSideBar,
}: SidebarState) {
  const state = useSelector((state: IBank) => state);
  return (
    <SideBar>
      <Animatable.View animation="fadeInRight" easing="ease-out" duration={800}>
        <SideBarContent>
          <ScrollView>
            <SidebarContentTitle>
              <Feather name="user" color="#8C52E5" size={35} />
              <TouchableOpacity onPress={() => setToggleSideBar(false)}>
                <Feather name="x" color="#8C52E5" size={35} />
              </TouchableOpacity>
            </SidebarContentTitle>
            <View>
              <SidebarInfo>Seu nome:</SidebarInfo>
              <UserInfo>{state.user.nome}</UserInfo>

              <SidebarInfo>Username:</SidebarInfo>
              <UserInfo>{state.user.login}</UserInfo>

              <SidebarInfo>CPF:</SidebarInfo>
              <UserInfo>{state.user.cpf}</UserInfo>

              <Division />
              <SidebarInfo>Você tem:</SidebarInfo>
              <UserInfo>{state.plan.length} planos de conta</UserInfo>
            </View>
          </ScrollView>
        </SideBarContent>
      </Animatable.View>
    </SideBar>
  );
}
