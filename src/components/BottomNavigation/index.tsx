import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { BottomNav, NavOption, NavOptionTitle } from "./style";
import { useNavigation } from "@react-navigation/native";

type BottomNavState = {
  setNavSelected: Function;
};

export default function BottomNavigation({ setNavSelected }: BottomNavState) {
  const navigation = useNavigation();

  const handleTransfer = () => {
    navigation.navigate("transfer");
  };

  const handleHistoric = () => {
    navigation.navigate("historic");
  };

  const handleDeposit = () => {
    navigation.navigate("deposit");
  };

  const handlePlans = () => {
    navigation.navigate("plans");
  };

  return (
    <BottomNav>
      <TouchableOpacity onPress={handleTransfer}>
        <NavOption>
          <Feather name="maximize-2" color="white" size={35} />
          <NavOptionTitle>Transferir</NavOptionTitle>
        </NavOption>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setNavSelected("historic")}>
        <NavOption>
          <Feather name="book" color="white" size={35} />
          <NavOptionTitle>Lançamentos</NavOptionTitle>
        </NavOption>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeposit}>
        <NavOption>
          <Feather name="corner-down-right" color="white" size={35} />
          <NavOptionTitle>Depositar</NavOptionTitle>
        </NavOption>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePlans}>
        <NavOption>
          <Feather name="dollar-sign" color="white" size={35} />
          <NavOptionTitle>Planos</NavOptionTitle>
        </NavOption>
      </TouchableOpacity>
    </BottomNav>
  );
}
