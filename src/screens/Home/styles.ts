import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BASE_GRAY_900,
  },

  // Seção de pesquisa
  searchContainer: {
    paddingTop: 20,
    gap: 15,
    paddingHorizontal: 32,
    paddingBottom: 137,
  },
  searchTitle: {
    fontSize: 20,
    lineHeight: 24,
    color: THEME.COLORS.BASE_WHITE,
    fontFamily: THEME.FONTS.BOLD_BALOO2
  },
  coffeeBeansImage: {
    position: "absolute",
    bottom: -82,
    right: -32,
    width: 82,
    height: 82,
  },

  
});
