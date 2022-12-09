import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeView from "./src/pages/Home/view";
import DeliveriesView from "./src/pages/Deliveries/view";
import OrdersView from "./src/pages/Orders/view";
import ProfileView from "./src/pages/Profile/view";

export default () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Profile"} screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name={"Home"} component={HomeView} />
        <Stack.Screen name={"Deliveries"} component={DeliveriesView} />
        <Stack.Screen name={"Orders"} component={OrdersView} />
        <Stack.Screen name={"Profile"} component={ProfileView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
