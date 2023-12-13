import { Text, View } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

type Props = {
  label: string;
  size?: "sm" | "md";
  variant?: "light" | "dark";
};

export function Tag({ label, variant = "light", size = "md" }: Props) {
  const paddingHorizontal = size === "sm" ? 8 : 12;
  const paddingVertical = size === "sm" ? 4 : 6;

  const backgroundColor =
    variant === "light" ? THEME.COLORS.BRAND_PURPLE_LIGHT : THEME.COLORS.BASE_GRAY_200;
  const color =
    variant === "light" ? THEME.COLORS.BRAND_PURPLE_DARK : THEME.COLORS.BASE_WHITE;

  return (
    <View
      style={[styles.container, { paddingHorizontal, paddingVertical, backgroundColor }]}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}
