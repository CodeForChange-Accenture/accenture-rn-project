import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Card, CardTitle, Balance, Historic, CardSubTitle } from "./style";
import { Button, View } from "react-native";
import { useSelector } from "react-redux";
import { IBank } from "../../interfaces";

const DashboardLancamentos: React.FC = () => {
  const [dateInicio, setDateInicio] = useState<Date>(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const state = useSelector((state: IBank) => state);
  const handleDateInicio = (selectedDate: any) => {
    const currentDate = selectedDate || dateInicio;
    setDateInicio(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <Card>
      <CardTitle>
        <Feather name="dollar-sign" color="#B9B9B9" size={20} /> Últimos
        lançamentos
      </CardTitle>
      <ScrollView>
        {state.banco.contaBanco.lancamentos.map((lancamentos, index) => (
          <Historic key={index}>
            <Balance>{lancamentos.valor.toFixed(2)}</Balance>
            <CardSubTitle>{lancamentos.data}</CardSubTitle>
          </Historic>
        ))}
      </ScrollView>
    </Card>
  );
};

export default DashboardLancamentos;
