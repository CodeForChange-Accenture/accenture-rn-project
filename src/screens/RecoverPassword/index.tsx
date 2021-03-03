import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import api from "../../service";
import { ContainerRecover, Card, GamabankLogo, SubmitButton, SubmitText, Title, FormRecover, TextLink } from './style'
import logoGama from '../../images/logo-gama.png'
import AsyncStorage from "@react-native-async-storage/async-storage";

const RecoverPassword: React.FC = () => {
    const navigation = useNavigation();

    const [user, setUser] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [recovered, setRecovered] = useState(false)

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
            api.post(`nova-senha`, postData)
                .then((response) => {

                    params: { senhaTemporaria: senhaTemporaria };
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
                        <TextInput
                            placeholder="Digite seu usuário"
                            onChangeText={(text) => setUser(text)}
                        />
                        <TextInput
                            placeholder="Nova senha"
                            onChangeText={(text) => setNewPass(text)}
                        />
                        <TextInput
                            placeholder="Confirme sua senha"
                            onChangeText={(text) => setConfirmPass(text)}
                        />
                        <SubmitButton onPress={handleRecover}>
                            <SubmitText>Continuar</SubmitText>
                            <Feather name="arrow-right" color="white" size={20} />
                        </SubmitButton>
                        <TextLink onPress={() => navigation.navigate("login")}>Ir para login</TextLink>
                        <TextLink>Ainda não sou cliente</TextLink>
                    </FormRecover>
                </Card>
            </View>
        </ContainerRecover>
    );
};
export default RecoverPassword;