import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  label: string;
}

export function Tag({label}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}