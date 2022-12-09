import React from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { colors } from "../../commons/colors";

interface ButtonViewProps {
  text: string,
  type: "default" | "cancel",
  action: Function;
  styles?: StyleProp<ViewStyle>;
}

const ButtonView = ({ text, type, action, styles }: ButtonViewProps): JSX.Element => {
  const defaultStyles = StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: type == "cancel" ? colors.red : colors.secondary,
      borderRadius: 8,
      elevation: 10,
      height: 48,
      justifyContent: "center",
      shadowColor: colors.shadow,
    },
    text: {
      color: colors.white,
      fontSize: 16,
      fontWeight: "600",
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[defaultStyles.container, styles]}
      onPress={() => action()}>
      <Text style={defaultStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(ButtonView);
