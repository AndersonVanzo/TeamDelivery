import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export {}

declare global {
  type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

  type RootStackParamList = {
    Home: undefined;
    Deliveries: undefined;
    Orders: undefined;
    Profile: undefined
  };
}
