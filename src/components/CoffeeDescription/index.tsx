import { Text, TextProps } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

type Props = TextProps & {
  label: string;
  size?: "xs" | "md";
  variant?: "grey_400" | "gray_500";
  textAlign?: 'center' | 'left'
};

export function CoffeeDescription({ size = 'xs', label, variant = 'grey_400', textAlign = 'left', ...rest }: Props) {
  const fontSize = size === "xs" ? 12 : 16;
  const color = variant === "grey_400" ? THEME.COLORS.BASE_GRAY_400 : THEME.COLORS.BASE_GRAY_500;

  return <Text style={[styles.description, { fontSize, color, textAlign }]} {...rest}>{label}</Text>;
}
