import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 46,
    paddingHorizontal: 8,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  label: {
    fontWeight: "700",
    fontFamily: THEME.FONTS.BOLD_BALOO2,
    fontSize: 14,
    color: THEME.COLORS.BASE_WHITE,
  },
});
