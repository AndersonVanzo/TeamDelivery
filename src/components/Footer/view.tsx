import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useFooterViewController from "./view.controller";
import { colors } from "../../commons/colors";

const FooterView = (): JSX.Element => {
  const viewModel = useFooterViewController();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} onPress={viewModel.goToHome}>
        <Text style={styles.buttonText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.75} onPress={viewModel.goToDeliveries}>
        <Text style={styles.buttonText}>Entregas</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.75} onPress={viewModel.goToOrders}>
        <Text style={styles.buttonText}>Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.75} onPress={viewModel.goToProfile}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(FooterView);

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
    height: 48,
    width: 48,
  },
  buttonText: {
    color: colors.white,
    fontSize: 11,
  },
});
