import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'visible',

    width: 208,
    height: 300,
    minHeight: 266,
    maxHeight: 277,

    backgroundColor: THEME.COLORS.BASE_GRAY_800,

    alignItems: "center",

    paddingHorizontal: 16,
    paddingBottom: 20,

    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
  },
  image: {
    alignSelf: 'center',
  },
});
