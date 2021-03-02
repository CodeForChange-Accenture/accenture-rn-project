import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { ContainerRecover, Card, GamabankLogo, Title, FormRecover } from './style'

import logoGama from '../../images/logo-gama.png'

const RecoverPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');



    return (
            <ContainerRecover>
                <GamabankLogo source={logoGama}/>
                <View>
                    <Card>
                        <Title>Redefinir Senha</Title>
                        <FormRecover>
                            <TextInput></TextInput>
                        </FormRecover>
                    </Card>
                </View>
            </ContainerRecover> 
    );
};

export default RecoverPassword;

