import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

interface ContentViewProps {
  children: JSX.Element | Array<JSX.Element>;
}

const ContentView = ({ children }: ContentViewProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default memo(ContentView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 75,
  },
});
