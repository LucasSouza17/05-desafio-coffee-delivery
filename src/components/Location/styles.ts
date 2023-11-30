import {StyleSheet} from 'react-native'
import { THEME } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7
  },
  label: {
    fontFamily: THEME.FONTS.REGULAR,
    fontSize: 14
  }
})