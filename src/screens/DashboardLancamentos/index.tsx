import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import {
  Card,
  CardTitle,
  Balance,
  Historic,
  CardSubTitle,
  DateInputText,
  DateSelecting,
} from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AddAccountInfos } from "../../store/modules/action";
import { IBank, IUser } from "../../interfaces";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import jwt_decode from "jwt-decode";
import api from "../../service";
const DashboardLancamentos: React.FC = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [dateInicio, setDateInicio] = useState(today);
  const [dateFim, setDateFim] = useState(today);
  const state = useSelector((state: IBank) => state);
  const [isDatePickerVisibleIncio, setDatePickerVisibilityIncio] = useState(
    false
  );
  const [isDatePickerVisibleFim, setDatePickerVisibilityFim] = useState(false);

  const showDatePickerInicio = () => {
    setDatePickerVisibilityIncio(true);
  };

  const hideDatePickerInicio = () => {
    setDatePickerVisibilityIncio(false);
  };

  const handleConfirmInicio = (date: any) => {
    hideDatePickerInicio();
    setDateInicio(date.toISOString().slice(0, 10));
  };

  const showDatePickerFim = () => {
    setDatePickerVisibilityFim(true);
  };

  const hideDatePickerFim = () => {
    setDatePickerVisibilityFim(false);
  };

  const handleConfirmFim = (date: any) => {
    hideDatePickerFim();
    setDateFim(date.toISOString().slice(0, 10));
  };
  const dispatch = useDispatch();

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
    async function reloadHistoric() {
      const token = await AsyncStorage.getItem("@tokenApp");
      const login = await TokenDecodedValue();
      api
        .get(`dashboard?fim=${dateFim}&inicio=${dateInicio}&login=${login}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((response) => {
          dispatch(AddAccountInfos(response.data));
        });
    }
    reloadHistoric();
  }, [dateInicio, dateFim]);

  return (
    <Card>
      <CardTitle>
        <Feather name="dollar-sign" color="#B9B9B9" size={20} /> Últimos
        lançamentos
      </CardTitle>
      <View>
        <DateSelecting>
          <TouchableOpacity onPress={showDatePickerInicio}>
            <DateInputText>Incio: {dateInicio}</DateInputText>
          </TouchableOpacity>
          <TouchableOpacity onPress={showDatePickerFim}>
            <DateInputText>Fim: {dateFim}</DateInputText>
          </TouchableOpacity>
        </DateSelecting>
        <DateTimePickerModal
          isVisible={isDatePickerVisibleIncio}
          mode="date"
          onConfirm={(date) => handleConfirmInicio(date)}
          onCancel={hideDatePickerInicio}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisibleFim}
          mode="date"
          onConfirm={(date) => handleConfirmFim(date)}
          onCancel={hideDatePickerFim}
        />
      </View>
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
