import React from "react";
import { StyleProp, StyleSheet, View } from "react-native";

interface ContentViewProps {
  children: JSX.Element | Array<JSX.Element>;
  styles?: StyleProp<any>;
}

const ContentView = ({ children, styles }: ContentViewProps): JSX.Element => {
  return (
    <View style={[defaultStyles.container, styles]}>
      {children}
    </View>
  );
};

export default React.memo(ContentView);

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 75,
  },
});
