import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 6,

    backgroundColor: THEME.COLORS.BASE_GRAY_800,

    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,

    borderWidth: 1,
    borderColor: THEME.COLORS.BASE_GRAY_700,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
  },
  image: {
    width: 96,
    height: 96,
    marginTop: -46,
  },
  contentInfo: {
    flexShrink: 1,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: THEME.FONTS.BOLD_BALOO2,
    fontWeight: "700",
    color: THEME.COLORS.BASE_GRAY_200,
  },
  description: {
    fontSize: 12,
    color: THEME.COLORS.BASE_GRAY_400,
  },
});
