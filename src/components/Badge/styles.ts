import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",

    width: 20,
    height: 20,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,

    backgroundColor: THEME.COLORS.BRAND_PURPLE,
  },
  label: {
    color: THEME.COLORS.BASE_WHITE,
    fontSize: 12,
    fontFamily: THEME.FONTS.REGULAR
  }
});
