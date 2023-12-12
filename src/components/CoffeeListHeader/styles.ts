import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BASE_GRAY_900,
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 12,
  },
  title: {
    color: THEME.COLORS.BASE_GRAY_300,
    fontFamily: THEME.FONTS.BOLD_BALOO2,
    fontSize: 16,
  },
  filterSection: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 8,
  },
});
