import { Text, View, ViewProps } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

type Props = ViewProps & {
  price: number;
  size?: "md" | "xl";
  variant?: "yellow_dark" | "yellow";
};

export function CoffeePrice({price, size = 'md', variant = 'yellow_dark'}: Props) {
  const fontSizeType = size === 'md' ? 14 : 14
  const fontSizePrice = size === 'md' ? 20 : 36
  const color = variant === 'yellow_dark' ? THEME.COLORS.BRAND_YELLOW_DARK : THEME.COLORS.BRAND_YELLOW


  return (
    <View style={styles.container}>
      <Text
        style={[styles.typePrice, {fontSize: fontSizeType, color}]}
      >
        R$
      </Text>
      <Text
        style={[styles.price, {fontSize: fontSizePrice, color}]}
      >
        {price.toFixed(2).replace('.', ',')}
      </Text>
    </View>
  );
}
