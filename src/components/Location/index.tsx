import { View, Text } from "react-native";
import { MapPin } from "phosphor-react-native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

type Props = {
  variant?: 'light' | 'dark'
}

export function Location({variant = 'light'}: Props) {
  const textColor = variant === 'light' ? THEME.COLORS.BASE_GRAY_900 : THEME.COLORS.BASE_GRAY_200

  return (
    <View style={styles.container}>
      <MapPin size={17.5} weight="fill" color={THEME.COLORS.BRAND_PURPLE}  />
      <Text style={[styles.label, {color: textColor}]}>São José do Rio Preto</Text>
    </View>
  );
}
