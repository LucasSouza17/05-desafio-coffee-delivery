import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BASE_GRAY_900,
  },
  searchContainer: {
    paddingTop: 20,
    gap: 15,
    paddingHorizontal: 32,
    paddingBottom: 137
  },
  searchTitle: {
    fontSize: 20,
    fontFamily: 'Baloo2_700Bold',
    lineHeight: 24,
    color: THEME.COLORS.BASE_WHITE
  }
});
