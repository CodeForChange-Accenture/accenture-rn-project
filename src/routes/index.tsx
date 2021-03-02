import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import Dashboard from "../screens/Dashboard";
import Transfer from "../screens/DashboardTransfer";
import Deposit from "../screens/DashboardDeposit";
import LoginRegister from "../screens/LoginRegister";
import Login from "../screens/LoginHome";
import RecoverPassword from "../screens/RecoverPassword"

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
         
        <Screen name="login" component={Login} />
        <Screen name="recover password" component={RecoverPassword}/> 
        <Screen name="splashscreen" component={SplashScreen} />
        <Screen name="deposit" component={Deposit} />
        <Screen name="register" component={LoginRegister} />
        <Screen name="dashboard" component={Dashboard} />
        <Screen name="splashscreen" component={SplashScreen} />
        <Screen name="transfer" component={Transfer} />
      </Navigator>
    </NavigationContainer>
  );
}
