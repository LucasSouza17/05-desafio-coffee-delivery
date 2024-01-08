import {View, Text} from 'react-native'
import { styles } from './styles'

type Props = {
  counter: number;
  top?: number;
  right?: number;
}

export function Badge({counter, top = -16, right = -16}: Props) {
  return (
    <View style={[styles.container, {top, right}]}>
      <Text style={styles.label}>{counter}</Text>
    </View>
  )
}