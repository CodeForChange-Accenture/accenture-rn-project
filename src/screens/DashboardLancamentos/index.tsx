import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Card, CardTitle, Balance, Historic, CardSubTitle } from "./style";
import { Button, View } from "react-native";

const DashboardLancamentos: React.FC = () => {
  const [dateInicio, setDateInicio] = useState<Date>(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const handleDateInicio = (selectedDate: any) => {
    const currentDate = selectedDate || dateInicio;
    setDateInicio(currentDate);
    console.log(dateInicio);
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
      {/* <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(1598051730000)}
            is24Hour={true}
            display="default"
            onChange={handleDateInicio}
          />
        )}
      </View> */}
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
