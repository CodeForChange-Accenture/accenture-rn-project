import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import {
  Card,
  CardTitle,
  Container,
  Form,
  TextInput,
  LogoGame,
  SubmitButton,
  SubmitText,
  ButtonLink,
} from "./style";
import api from "../../service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

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
    <Container>
      <LogoGame source={logoGama} />
      <View>
        <Card>
          <CardTitle>Seja bem vindo, informe seus dados para logar.</CardTitle>
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
            <SubmitButton onPress={handleLogin}>
              <SubmitText>Continuar</SubmitText>
              <Feather name="arrow-right" color="white" size={20} />
            </SubmitButton>
            <ButtonLink onPress={() => navigation.navigate("newPassword")}>
              <Text style={{ color: "blue" }}>Esqueci minha senha</Text>
            </ButtonLink>
            <ButtonLink onPress={() => navigation.navigate("register")}>
              <Text style={{ color: "blue" }}>Ainda não sou cliente</Text>
            </ButtonLink>
          </Form>
        </Card>
      </View>
    </Container>
  );
};
export default Login;
