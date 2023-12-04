import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 2,
  },
  typePrice: {
    fontFamily: THEME.FONTS.REGULAR,
  },
  price: {
    fontFamily: THEME.FONTS.BOLD_BALOO2,
  }
});
