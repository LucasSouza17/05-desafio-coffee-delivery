import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CoffeeCartData } from "../../context/CartContext";
import { CoffeePrice } from "../CoffeePrice";
import { AddRemoveButton } from "../AddRemoveButton";
import { Trash } from "phosphor-react-native";
import { THEME } from "../../styles/theme";
import { useCart } from "../../hooks/useCart";

type Props = {
  cart: CoffeeCartData;
};

export function CartItem({ cart }: Props) {
  const { increase, decrease, remove } = useCart();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={cart.image} />
        <View style={styles.contentInfoContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.labelsInfo}>
              <Text style={styles.title}>{cart.title}</Text>
              <Text style={styles.size}>{cart.size}</Text>
            </View>
            <CoffeePrice price={cart.amount * cart.price} size="sm" variant="dark" />
          </View>
          <View style={styles.actionButtonsContainer}>
            <AddRemoveButton
              onPressAdd={() => increase(cart.id)}
              onPressRemove={() => decrease(cart.id)}
              value={cart.amount}
              withBorder
            />
            <TouchableOpacity
              style={styles.removeButton}
              activeOpacity={0.8}
              onPress={() => remove(cart.id)}
            >
              <Trash color={THEME.COLORS.BRAND_PURPLE} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
