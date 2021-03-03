import React from "react";
import { Image } from "react-native";
import { SplashMain } from "./style";
import logoGama from "../../images/logo-gama.png";
import { useNavigation } from "@react-navigation/native";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  {
    setTimeout(() => {
      navigation.navigate("login");
    }, 1500);
  }
  return (
    <SplashMain>
      <Image source={logoGama} />
    </SplashMain>
  );
};

export default SplashScreen;
