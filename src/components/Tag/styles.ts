import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    alignSelf: "auto"
  },
  label: {
    fontFamily: THEME.FONTS.BOLD_ROBOTO,
    fontSize: 10,
    fontWeight: "700",
    color: THEME.COLORS.BRAND_PURPLE_DARK,
  },
});
