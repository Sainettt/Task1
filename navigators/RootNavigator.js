import React, { useContext, useEffect } from "react";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

export const RootNavigator = () => {
  const { isLoggedIn } = useContext(AuthContext);
    
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
