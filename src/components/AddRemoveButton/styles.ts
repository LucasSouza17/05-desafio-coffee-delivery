import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderColor: THEME.COLORS.BASE_GRAY_600,
    borderRadius: 6
  },
  containerButtons: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLabel: {
    height: 36,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: THEME.COLORS.BASE_GRAY_100,
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR
  }
});
