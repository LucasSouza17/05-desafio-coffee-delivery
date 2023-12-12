import { StyleSheet } from "react-native"
import { THEME } from "../../styles/theme"

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textTransform: 'uppercase',
    fontFamily: THEME.FONTS.BOLD_ROBOTO,
    fontWeight: "700",
    fontSize: 10
  }
})