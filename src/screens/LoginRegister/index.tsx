import React, { useEffect } from "react";
import { View, Text, Alert, ScrollView } from "react-native";
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
import { useForm } from "react-hook-form";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import logoGama from "../../images/logo-gama.png";
import styled from "styled-components";

export default function Register(/* data: Inputs */) {
  /*  const postData = {
  cpf: data.cpf.replace(/[^\d]/g, ""),
  nome: data.name,
  login: data.userName,
  senha: data.password,
}; */
  const onSubmit = (data: any) => {
    Alert.alert("Form Data", data);
  };

  const { register, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();

  useEffect(() => {
    register("cpf");
    register("name");
    register("userName");
    register("password");
    register("confirmPassword");
  }, [register]);

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
              <TextInput
                onChangeText={(Text) => {
                  setValue("cpf", Text);
                }}
                placeholder="Digite seu CPF"
              />
              <TextInput
                onChangeText={(Text) => {
                  setValue("name", Text);
                }}
                placeholder="Nome completo"
              />
              <TextInput
                onChangeText={(Text) => {
                  setValue("userName", Text);
                }}
                placeholder="Nome do usuário"
              />
              <TextInput
                secureTextEntry={true}
                onChangeText={(Text) => {
                  setValue("password", Text);
                }}
                placeholder="Digite sua senha"
              />
              <TextInput
                secureTextEntry={true}
                onChangeText={(Text) => {
                  setValue("confirmPassword", Text);
                }}
                placeholder="Confirme sua senha"
              />
              <SubmitButton onPress={handleSubmit(onSubmit)}>
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
