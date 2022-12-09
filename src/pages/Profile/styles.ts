import { StyleSheet } from "react-native";
import { colors } from "../../commons/colors";

export const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.gray,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 10,
    padding: 20,
    marginTop: 20,
    shadowColor: colors.shadow,
  },
  label: {
    color: colors.black,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 14,
    marginBottom: 8,
  },
  separator: {
    height: 18,
  },
});
