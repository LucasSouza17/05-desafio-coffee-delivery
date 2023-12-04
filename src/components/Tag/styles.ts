import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: THEME.COLORS.BRAND_PURPLE_LIGHT,
  },
  label: {
    fontFamily: THEME.FONTS.BOLD_ROBOTO,
    fontSize: 10,
    fontWeight: "700",
    color: THEME.COLORS.BRAND_PURPLE_DARK,
  },
});
