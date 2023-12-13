import { TouchableOpacity } from "react-native";
import { ShoppingCart } from "phosphor-react-native";

import { THEME } from "../../styles/theme";
import { Badge } from "../Badge";

type Props = {
  variant?: "yellowDark" | "purple"
}

export function Cart({variant = "yellowDark"}: Props) {
  const colorBg = variant === "yellowDark" ? THEME.COLORS.BRAND_YELLOW_DARK : THEME.COLORS.BRAND_PURPLE

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Badge counter={1} />
      <ShoppingCart size={20} weight="fill" color={colorBg} />
    </TouchableOpacity>
  );
}
