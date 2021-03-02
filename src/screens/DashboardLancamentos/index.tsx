import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Card, CardTitle, Balance, Historic, CardSubTitle } from "./style";

const DashboardLancamentos: React.FC = () => {
  return (
    <Card>
      <CardTitle>
        <Feather name="dollar-sign" color="#B9B9B9" size={20} /> Últimos
        lançamentos
      </CardTitle>
      <ScrollView>
        <Historic>
          <Balance>R$:1.890,00</Balance>
          <CardSubTitle>11 de Fev</CardSubTitle>
        </Historic>
        <Historic>
          <Balance>R$:1.890,00</Balance>
          <CardSubTitle>11 de Fev</CardSubTitle>
        </Historic>
        <Historic>
          <Balance>R$:1.890,00</Balance>
          <CardSubTitle>11 de Fev</CardSubTitle>
        </Historic>
        <Historic>
          <Balance>R$:1.890,00</Balance>
          <CardSubTitle>11 de Fev</CardSubTitle>
        </Historic>
        <Historic>
          <Balance>R$:1.890,00</Balance>
          <CardSubTitle>11 de Fev</CardSubTitle>
        </Historic>
        <Historic>
          <Balance>R$:1.890,00</Balance>
          <CardSubTitle>11 de Fev</CardSubTitle>
        </Historic>
        <Historic>
          <Balance>R$:1.890,00</Balance>
          <CardSubTitle>11 de Fev</CardSubTitle>
        </Historic>
      </ScrollView>
    </Card>
  );
};

export default DashboardLancamentos;
