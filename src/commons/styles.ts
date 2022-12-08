import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  pageTitle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 19,
    marginBottom: 20,
  },
  listContainer: {
    marginHorizontal: -20,
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  listContentOnly: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 14,
    elevation: 10,
    shadowColor: colors.shadow,
    marginBottom: 20,
  },
  cardHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 14,
  },
  cardHeaderContent: {
    paddingLeft: 14,
  },
  cardHeaderText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
  },
  cardHeaderTextSmall: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
  },
  cardText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    marginBottom: 14,
  },
  cardButton: {
    width: "100%",
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  cardButtonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
  },
});
