import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../commons/styles";
import { colors } from "../../commons/colors";

const DeliveryCardView = (): JSX.Element => {
  const styles = StyleSheet.create({
    paymentStatus: {
      color: colors.red,
    },
  });

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.cardText}>Ter. 29/11</Text>
      <Text style={globalStyles.cardText}>Pagamentos: <Text style={styles.paymentStatus}>Nenhum</Text></Text>
      <TouchableOpacity activeOpacity={0.75} style={globalStyles.cardButton}>
        <Text style={globalStyles.cardButtonText}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(DeliveryCardView);
