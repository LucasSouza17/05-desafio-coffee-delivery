import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BASE_GRAY_900,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: THEME.COLORS.BASE_GRAY_100,
  },

  mainContent: {
    paddingHorizontal: 32,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  mainContentInfo: {
    alignItems: "flex-start",
    gap: 12,
  },

  descriptionContainer: {
    paddingHorizontal: 32,
    marginTop: 20,
  },

  imageContainer: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 10,
  },

  buyContainer: {
    backgroundColor: THEME.COLORS.BASE_GRAY_900,
    paddingTop: 42,
    paddingHorizontal: 32,
  },

  sizesContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },

  addCartContainer: {
    marginTop: 20,
    backgroundColor: THEME.COLORS.BASE_GRAY_700,
    padding: 8,
    gap: 16,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
});
