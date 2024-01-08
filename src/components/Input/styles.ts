import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 42,
    paddingLeft: 12,

    backgroundColor: THEME.COLORS.BASE_GRAY_200,

    flexDirection: "row",
    alignItems: "center",

    borderRadius: 4,
    gap: 8
  },
  input: {
    flex: 1,
    height: 42,

    color: THEME.COLORS.BASE_GRAY_700,
    fontFamily: THEME.FONTS.REGULAR
  }
});
