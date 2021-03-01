import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { ContainerRecover, Card, GamabankLogo } from './style'



const RecoverPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');



    return (
        <ScrollView>
            <ContainerRecover>
                {/* <GamabankLogo source={logoGama}/> */}
            </ContainerRecover>
        </ScrollView>
    );
};

export default RecoverPassword;

