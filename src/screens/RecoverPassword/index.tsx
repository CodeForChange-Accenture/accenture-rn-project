import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { ContainerRecover, Card, GamabankLogo, Button, Title, FormRecover } from './style'
import logoGama from '../../images/logo-gama.png'

const RecoverPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    function handleRecover(){

    }


    return (
            <ContainerRecover>
                <GamabankLogo source={logoGama}/>
                <View>
                    <Card>
                        <Title>Redefinir Senha</Title>
                        <FormRecover>
                            <TextInput
                            placeholder="Digite seu usuário"
                            />
                            <TextInput
                            placeholder="Digite sua nova senha"
                            />
                            <TextInput
                            placeholder="Confirme sua nova senha"
                            />
                            <Button onPress={handleRecover} title="Continuar"></Button>
                            <Text>Ir para login</Text>
                            <Text>Ainda não sou cliente</Text>
                        </FormRecover>
                    </Card>
                </View>
            </ContainerRecover> 
    );
};

export default RecoverPassword;

