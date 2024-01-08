import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BASE_GRAY_900,
    alignItems: "center",
    justifyContent: "center",
    padding: 52,
    gap: 36
  },
  content: {
    gap: 8
  },
  title: {
    fontSize: 24,
    fontFamily: THEME.FONTS.BOLD_BALOO2,
    color: THEME.COLORS.BRAND_YELLOW_DARK,
    textAlign: "center"
  },
  description: {
    fontSize: 14,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.BASE_GRAY_200,
    textAlign: "center"
  }
})