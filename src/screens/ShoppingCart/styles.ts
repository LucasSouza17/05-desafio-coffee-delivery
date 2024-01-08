import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BASE_GRAY_900,
  },

  emptyContainer: {
    padding: 64,
    justifyContent: "center",
    gap: 32,
  },
  contentEmpty: {
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  textEmptyContainer: {
    fontSize: 14,
    color: THEME.COLORS.BASE_GRAY_400,
  },

  scrollViewContainer: {
    borderTopColor: THEME.COLORS.BASE_GRAY_700,
    paddingBottom: 80
  },

  containerConfirmOrder: {
    paddingHorizontal: 32,
    paddingTop: 28,
    paddingBottom: 40,
    gap: 20,
    backgroundColor: THEME.COLORS.BASE_WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.14,
    shadowRadius: 4.22,

    elevation: 2,
  },
  confirmOrderContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  confirmOrderText: {
    fontSize: 16,
    color: THEME.COLORS.BASE_GRAY_200,
    fontFamily: THEME.FONTS.REGULAR,
  },

  swipeableContainer: {
    width: "100%",
    backgroundColor: THEME.COLORS.ERROR_RED_LIGHT,
  },
  swipeableRemove: {
    width: "100%",
    justifyContent: "center",
    paddingLeft: 32,
  },
});
