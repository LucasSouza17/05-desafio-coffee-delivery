import { Text, TextProps } from "react-native";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";

type Props = TextProps & {
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  textAlign?: 'center' | 'left'
};

export function CoffeeTitle({ size = 'md', label, variant = 'dark', textAlign = 'left', ...rest }: Props) {
  const fontSize = size === "sm" ? 16 : size === "md" ? 20 : 24;
  const color = variant === "dark" ? THEME.COLORS.BASE_GRAY_200 : THEME.COLORS.BASE_WHITE;

  return <Text style={[styles.title, { fontSize, color, textAlign }]} {...rest}>{label}</Text>;
}
