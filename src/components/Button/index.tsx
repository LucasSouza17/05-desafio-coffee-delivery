import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

type Props = TouchableOpacityProps & {
  variant?: "purple" | "yellow";
  label: string;
};

export function Button({ variant = "purple", label, disabled, ...rest }: Props) {
  const bgColor =
    variant === "purple"
      ? THEME.COLORS.BRAND_PURPLE_DARK
      : THEME.COLORS.BRAND_YELLOW_DARK;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: bgColor, opacity: disabled ? 0.3 : 1 },
      ]}
      activeOpacity={disabled ? 0.3 : 0.8}
      {...rest}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
