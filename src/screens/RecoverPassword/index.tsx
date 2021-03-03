import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import api from "../../service";
import {
  ContainerRecover,
  Card,
  GamabankLogo,
  SubmitButton,
  SubmitText,
  Title,
  FormRecover,
  TextLink,
  TextInputPass,
} from "./style";
import logoGama from "../../images/logo-gama.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RecoverPassword: React.FC = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  async function handleRecover(event: any) {
    event.preventDefault();
    const senhaTemporaria = await AsyncStorage.getItem("@temporaryPassword");
    const postData = {
      senha: newPass,
      usuario: user,
    };

    if (newPass === "" || newPass !== confirmPass || confirmPass === "") {
      alert("Senhas não conferem");
      return;
    } else {
      api
        .post(`altera-senha`, postData, {
          params: { senhaTemporaria: senhaTemporaria },
        })
        .then(() => {
          alert("Senha alterada com sucesso!");
          navigation.navigate("login");
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
          <FormRecover>
            <TextInputPass
              placeholder="Digite seu usuário"
              onChangeText={(text) => setUser(text)}
            />
            <TextInputPass
              placeholder="Nova senha"
              secureTextEntry={true}
              onChangeText={(text) => setNewPass(text)}
            />
            <TextInputPass
              placeholder="Confirme sua senha"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPass(text)}
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
          </FormRecover>
        </Card>
      </View>
    </ContainerRecover>
  );
};
export default RecoverPassword;
