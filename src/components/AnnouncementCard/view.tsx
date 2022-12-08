import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../commons/styles";
import { colors } from "../../commons/colors";

const AnnouncementCardView = (): JSX.Element => {
  return (
    <View style={globalStyles.card}>
      <View style={globalStyles.cardHeader}>
        <Image style={styles.image} />
        <View style={globalStyles.cardHeaderContent}>
          <Text style={globalStyles.cardHeaderText}>Anderson Vanzo</Text>
          <Text style={globalStyles.cardHeaderTextSmall}>15:30</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.75} style={globalStyles.cardButton}>
        <Text style={globalStyles.cardButtonText}>Fazer pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(AnnouncementCardView);

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.gray,
  },
});
