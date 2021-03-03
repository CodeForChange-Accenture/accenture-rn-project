import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import api from "../../service";
import { ContainerRecover, Card, GamabankLogo, Button, Title, FormRecover, TextLink } from './style'
import logoGama from '../../images/logo-gama.png'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const NewPassword: React.FC = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    
    function handleRecover(event: any) {
        event.preventDefault();

        const postData = {
            usuario: user,
            email: email,
        };

        if (email == "" || user == ""){
            alert("Preencha todos os campos")
        }else{
            api.post(`confirma-usuario`, postData)
                .then((response) =>{
                    AsyncStorage.setItem("@temporaryPassword", response.data.token);
                    navigation.navigate("recoverPassword")
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
                            placeholder="Digite seu email"
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            placeholder="Digite seu login"
                            onChangeText={(text) => setUser(text)}
                        />
                        <Button onPress={handleRecover} title="Continuar">
                            <Feather name="arrow-right" color="white" size={20} />
                        </Button>
                        <TextLink>Ir para login</TextLink>
                        <TextLink>Ainda não sou cliente</TextLink>
                    </FormRecover>
                </Card>
            </View>
        </ContainerRecover>
    );
};

export default NewPassword;

