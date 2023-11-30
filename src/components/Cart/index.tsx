import { TouchableOpacity } from "react-native";
import { ShoppingCart } from "phosphor-react-native";

import { THEME } from "../../styles/theme";
import { Badge } from "../Badge";

export function Cart() {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Badge counter={1} />
      <ShoppingCart size={20} weight="fill" color={THEME.COLORS.BRAND_YELLOW_DARK} />
    </TouchableOpacity>
  );
}
