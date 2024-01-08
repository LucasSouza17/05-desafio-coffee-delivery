import { TouchableOpacity } from "react-native";
import { ShoppingCart } from "phosphor-react-native";

import { THEME } from "../../styles/theme";
import { Badge } from "../Badge";
import { useCart } from "../../hooks/useCart";
import { useNavigation } from "@react-navigation/native";

type Props = {
  variant?: "yellowDark" | "purple" | "filled";
};

export function Cart({ variant = "yellowDark" }: Props) {
  const { cart } = useCart();

  const navigation = useNavigation(); 
  
  const colorBg =
    variant === "yellowDark"
      ? THEME.COLORS.BRAND_YELLOW_DARK
      : variant === "purple"
      ? THEME.COLORS.BRAND_PURPLE
      : THEME.COLORS.BASE_WHITE;
  const positionBadge = variant === "filled" ? -10 : -16

  function handleGoToShoppingCart() {
    navigation.navigate('shopping_cart');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        {
          backgroundColor:
            variant === "filled" ? THEME.COLORS.BASE_GRAY_500 : "transparent",
          padding: variant === "filled" ? 8 : 0,
          borderRadius: variant === "filled" ? 6 : 0
        },
      ]}
      onPress={handleGoToShoppingCart}
    >
      {cart.length > 0 && <Badge counter={cart.length} top={positionBadge} right={positionBadge} />}
      <ShoppingCart size={20} weight="fill" color={colorBg} />
    </TouchableOpacity>
  );
}
