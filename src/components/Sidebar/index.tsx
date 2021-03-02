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
        </SideBarContent>
      </Animatable.View>
    </SideBar>
  );
}
