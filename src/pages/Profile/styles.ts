import { StyleSheet } from "react-native";
import { colors } from "../../commons/colors";

export const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  image: {
    backgroundColor: colors.gray,
    borderRadius: 60,
    height: 120,
    width: 120,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 10,
    marginTop: 20,
    padding: 20,
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
  spacer: {
    flex: 1,
  },
  dataContainer: {
    height: 48,
    justifyContent: "center",
  },
  data: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "400",
  },
});
