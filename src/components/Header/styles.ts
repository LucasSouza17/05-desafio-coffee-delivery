import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  locationLabel: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14,
  },
})