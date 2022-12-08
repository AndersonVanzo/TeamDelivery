import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../commons/colors";

interface HeaderProps {
  title: string,
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default memo(Header)

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 75,
    justifyContent: "center",
    width: "100%",
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "700",
  },
});
