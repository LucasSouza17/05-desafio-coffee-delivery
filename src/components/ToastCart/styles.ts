import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.BASE_WHITE,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,

    paddingHorizontal: 32,
    paddingBottom: 32,
    paddingTop: 28,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5.22,

    elevation: 3,

    position: "absolute",
    zIndex: 10,
  },
  textInfo: {
    flexShrink: 1,
    fontSize: 14,
    color: THEME.COLORS.BASE_GRAY_400,
    fontFamily: THEME.FONTS.REGULAR
  },
  strong: {
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textAction: {
    color: THEME.COLORS.BRAND_PURPLE,
    fontFamily: THEME.FONTS.BOLD_ROBOTO
  },
});
