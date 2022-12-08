import { useNavigation } from "@react-navigation/native";

const useFooterViewController = () => {
  const navigation = useNavigation<NavigationProps>();

  const goToHome = (): void => {
    navigation.navigate("Home");
  };

  const goToDeliveries = (): void => {
    navigation.navigate("Deliveries");
  };

  const goToOrders = (): void => {
    navigation.navigate("Orders");
  };

  const goToProfile = (): void => {
    navigation.navigate("Profile");
  };

  return {
    goToHome,
    goToDeliveries,
    goToOrders,
    goToProfile,
  };
};

export default useFooterViewController;
