import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import api from "../../service";
import {
  ContainerRecover,
  Card,
  GamabankLogo,
  SubmitButton,
  SubmitText,
  Title,
  Form,
  TextLink,
  TextInputPass,
} from "./style";
import logoGama from "../../images/logo-gama.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const NewPassword: React.FC = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  function handleRecover(event: any) {
    event.preventDefault();

    const postData = {
      login: user,
      email: email,
    };

    if (email == "" || user == "") {
      alert("Preencha todos os campos");
    } else {
      api
        .post(`nova-senha`, postData)
        .then((response) => {
          if (response.status === 200) {
            AsyncStorage.setItem("@temporaryPassword", response.data);
            navigation.navigate("recoverPassword");
          }
        })
        .catch((e) => {
          alert(e);
        });
    }
  }
  return (
    <ContainerRecover>
      <GamabankLogo source={logoGama} />
      <View>
        <Card>
          <Title>Redefinir Senha</Title>
          <Form>
            <TextInputPass
              placeholder="Digite seu email"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInputPass
              placeholder="Digite seu login"
              onChangeText={(text) => setUser(text)}
            />
            <SubmitButton onPress={handleRecover}>
              <SubmitText>Continuar</SubmitText>
              <Feather name="arrow-right" color="white" size={20} />
            </SubmitButton>
            <TextLink onPress={() => navigation.navigate("login")}>
              <Text style={{ color: "blue" }}> Voltar para login</Text>
            </TextLink>
            <TextLink onPress={() => navigation.navigate("register")}>
              <Text style={{ color: "blue" }}>Ainda não sou cliente</Text>
            </TextLink>
          </Form>
        </Card>
      </View>
    </ContainerRecover>
  );
};

export default NewPassword;
