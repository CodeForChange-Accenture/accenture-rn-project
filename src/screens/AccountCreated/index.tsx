import React, { useEffect } from "react";
import { View } from "react-native";
import { Container, Like, LogoGame, SubmitText } from "./style";
import logoGama from "../../images/logo-gama.png";

import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const AccountCreated: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("login");
    }, 2500);
  }, []);

  return (
    <Container>
      <LogoGame source={logoGama} />
      <View>
        <Like>
          <LottieView
            source={require("../../animations/lf30_editor_qjjsenst.json")}
            autoPlay
            loop
          />
        </Like>
        <SubmitText>Conta criada com sucesso!</SubmitText>
      </View>
    </Container>
  );
};

export default AccountCreated;
