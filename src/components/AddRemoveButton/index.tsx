import { Text, TouchableOpacity, View } from "react-native";

import { Minus, Plus } from "phosphor-react-native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

type Props = {
  onPressRemove: () => void;
  onPressAdd: () => void;
  value: number;
  withBorder?: boolean
};

export function AddRemoveButton({onPressAdd, onPressRemove, value, withBorder = false}: Props) {
  return (
    <View style={[styles.container, {borderWidth: withBorder ? 1 : 0}]}>
      <TouchableOpacity activeOpacity={0.7} style={styles.containerButtons} onPress={onPressRemove}>
        <Minus color={THEME.COLORS.BRAND_PURPLE} size={20} weight="bold" />
      </TouchableOpacity>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{value}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.containerButtons} onPress={onPressAdd}>
        <Plus color={THEME.COLORS.BRAND_PURPLE} size={20} weight="bold" />
      </TouchableOpacity>
    </View>
  );
}
