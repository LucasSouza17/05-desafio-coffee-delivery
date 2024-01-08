import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 16,

    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.BASE_GRAY_700,

    backgroundColor: THEME.COLORS.BASE_GRAY_900
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 64,
    height: 64,
  },

  contentInfoContainer: {
    flex: 1,
    gap: 8
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 9
  },
  labelsInfo: {
    gap: 2
  },
  title: {
    fontSize: 16,
    color: THEME.COLORS.BASE_GRAY_100,
    fontFamily: THEME.FONTS.REGULAR
  },
  size: {
    fontSize: 14,
    color: THEME.COLORS.BASE_GRAY_400,
    fontFamily: THEME.FONTS.REGULAR
  },

  actionButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  removeButton: {
    backgroundColor: THEME.COLORS.BASE_GRAY_700,
    padding: 8,
    borderRadius: 6
  }
});
