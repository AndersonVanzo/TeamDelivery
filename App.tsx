import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";

import LoginView from "./src/pages/Login/view";
import HomeView from "./src/pages/Home/view";
import DeliveriesView from "./src/pages/Deliveries/view";
import OrdersView from "./src/pages/Orders/view";
import ProfileView from "./src/pages/Profile/view";

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const signed = auth().currentUser;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={signed ? "Home" : "Login"}
                       screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name={"Login"} component={LoginView} />
        <Stack.Screen name={"Home"} component={HomeView} />
        <Stack.Screen name={"Deliveries"} component={DeliveriesView} />
        <Stack.Screen name={"Orders"} component={OrdersView} />
        <Stack.Screen name={"Profile"} component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
