import React, { useEffect, useState } from "react";
import { View, Text, Alert, ScrollView } from "react-native";
import {
  Card,
  CardTitle,
  Container,
  Form,
  TextInput,
  TextInputMask,
  LogoGame,
  SubmitButton,
  SubmitText,
  ButtonLink,
  ErrorText,
} from "./style";
import { useForm } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import logoGama from "../../images/logo-gama.png";
import api from "../../service";

type Inputs = {
  cpf: string;
  name: string;
  userName: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const navigation = useNavigation();
  const { register, handleSubmit, setValue, errors, getValues } = useForm<Inputs>();
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    register("cpf", { required: true });
    register("name", { required: true });
    register("userName", { required: true });
    register("password", { required: true });
    register("confirmPassword", {
      required: true,
      validate: (value) => value === getValues("password"),
    });
  }, [register]);

  const onSubmit = (data: any) => {
    Alert.alert("Form Data", data);
    console.log(data);
  };

  function createAccount(data: Inputs) {
    const postData = {
      cpf: data.cpf,
      nome: data.name,
      login: data.userName,
      senha: data.password,
    };

    api
      .post(`usuarios`, postData)
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate("register-success");
        } else {
          alert("Erro no cadastro!");
        }
      })
      .catch(() => {
        alert("Algo deu errado!");
      });
  }

  return (
    <ScrollView>
      <Container>
        <LogoGame source={logoGama} />
        <View>
          <Card>
            <CardTitle>
              Peça sua conta e cartão de crédito do Gama Bank
            </CardTitle>
            <Form>
              {errors.cpf && <ErrorText>Esse campo é obrigatório</ErrorText>}
              <TextInputMask
                type="cpf"
                value={cpf}
                onChangeText={(text) => {
                  setValue("cpf", text);
                  setCpf(text);
                }}
                placeholder="Digite seu CPF"
              />
              {errors.name && <ErrorText>Esse campo é obrigatório</ErrorText>}
              <TextInput
                onChangeText={(text) => {
                  setValue("name", text);
                }}
                placeholder="Nome completo"
              />
              {errors.userName && (
                <ErrorText>Esse campo é obrigatório</ErrorText>
              )}
              <TextInput
                onChangeText={(text) => {
                  setValue("userName", text);
                }}
                placeholder="Nome do usuário"
              />
              {errors.password && (
                <ErrorText>Esse campo é obrigatório</ErrorText>
              )}
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => {
                  setValue("password", text);
                }}
                placeholder="Digite sua senha"
              />
              {errors.confirmPassword && (
                <ErrorText>As senhas não correspondem</ErrorText>
              )}
              <TextInput
                secureTextEntry={true}
                onChangeText={(text) => {
                  setValue("confirmPassword", text);
                }}
                placeholder="Confirme sua senha"
              />
              <SubmitButton onPress={handleSubmit(createAccount)}>
                <SubmitText>Continuar</SubmitText>
                <Feather name="arrow-right" color="white" size={20} />
              </SubmitButton>
              <ButtonLink onPress={() => navigation.navigate("login")}>
                <Text style={{ color: "blue" }}> Voltar para login</Text>
              </ButtonLink>
            </Form>
          </Card>
        </View>
      </Container>
    </ScrollView>
  );
}
