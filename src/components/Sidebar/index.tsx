import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  SideBar,
  SidebarContentTitle,
  SidebarInfo,
  UserInfo,
  Division,
} from "./style";
import { TouchableOpacity, ScrollView, View } from "react-native";

type SidebarState = {
  setToggleSideBar: Function;
  toggleSideBar?: boolean;
};

export default function Sidebar({
  setToggleSideBar,
  toggleSideBar,
}: SidebarState) {
  return (
    <SideBar>
      <ScrollView>
        <SidebarContentTitle>
          <Feather name="user" color="#8C52E5" size={35} />
          <TouchableOpacity onPress={() => setToggleSideBar(false)}>
            <Feather name="x" color="#8C52E5" size={35} />
          </TouchableOpacity>
        </SidebarContentTitle>
        <View>
          <SidebarInfo>Seu nome:</SidebarInfo>
          <UserInfo>Nome</UserInfo>
          <SidebarInfo>Email:</SidebarInfo>
          <UserInfo>Nome</UserInfo>

          <SidebarInfo>Username:</SidebarInfo>
          <UserInfo>Nome</UserInfo>

          <SidebarInfo>CPF:</SidebarInfo>
          <UserInfo>000.000.000.00</UserInfo>

          <Division />
          <SidebarInfo>Você tem:</SidebarInfo>
          <UserInfo>Nome</UserInfo>
        </View>
      </ScrollView>
    </SideBar>
  );
}
