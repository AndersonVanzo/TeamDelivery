import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useFooterViewController from "./view.controller";
import { colors } from "../../commons/colors";

const FooterView = (): JSX.Element => {
  const viewModel = useFooterViewController();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={viewModel.goToHome}>
        <Text style={styles.buttonText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={viewModel.goToDeliveries}>
        <Text style={styles.buttonText}>Entregas</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={viewModel.goToOrders}>
        <Text style={styles.buttonText}>Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={viewModel.goToProfile}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(FooterView);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 75,
    justifyContent: "space-evenly",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    height: 48,
    justifyContent: "center",
    width: 48,
  },
  buttonText: {
    color: colors.white,
    fontSize: 11,
  },
});
