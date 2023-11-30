import {View, Text} from 'react-native'
import { styles } from './styles'

type Props = {
  counter: number;
}

export function Badge({counter}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{counter}</Text>
    </View>
  )
}