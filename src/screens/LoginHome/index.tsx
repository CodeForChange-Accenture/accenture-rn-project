import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import {
  Card,
  CardTitle,
  Container,
  Form,
  TextInput,
  LogoGame,
  Button,
} from "./style";
import api from "../../service";
import AsyncStorage from "@react-native-async-storage/async-storage";

import logoGama from "../../images/logo-gama.png";
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event: any) {
    event.preventDefault();
    const postData = {
      usuario: login,
      senha: password,
    };

    api
      .post(`login`, postData)
      .then((response) => {
        AsyncStorage.setItem("@tokenApp", response.data.token);
        navigation.navigate("dashboard");
      })
      .catch((e) => {
        alert(e);
      });
  }

  return (
    <ScrollView>
      <Container>
        <LogoGame source={logoGama} />
        <View>
          <Card>
            <CardTitle>
              Seja bem vindo, informe seus dados para logar.
            </CardTitle>
            <Form>
              <TextInput
                onChangeText={(text) => setLogin(text)}
                placeholder="Digite seu usuário"
              />
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                placeholder="Digite sua senha"
              />
              <Button onPress={handleLogin} title="Continuar"></Button>
              <Text> Esqueci minha senha </Text>
              <Text> Ainda não sou cliente </Text>
            </Form>
          </Card>
        </View>
      </Container>
    </ScrollView>
  );
};
export default Login;