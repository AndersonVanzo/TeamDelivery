import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../commons/styles";

const OrderCardView = (): JSX.Element => {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.cardText}>Ter. 29/11</Text>
      <Text style={globalStyles.cardText}>Detalhes: Monster Mangoloco (1)</Text>
      <TouchableOpacity activeOpacity={0.75} style={globalStyles.cardButton}>
        <Text style={globalStyles.cardButtonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(OrderCardView);
