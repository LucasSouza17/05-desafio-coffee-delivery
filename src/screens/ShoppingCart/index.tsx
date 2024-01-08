import { useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import Animated, {
  Layout,
  SlideInDown,
  SlideInRight,
  SlideOutDown,
  SlideOutRight,
  ZoomIn,
} from "react-native-reanimated";
import { Swipeable } from "react-native-gesture-handler";

import { ShoppingCart as ShoppingCartPhosphor, Trash } from "phosphor-react-native";
import { NavHeader } from "../../components/NavHeader";
import { CoffeePrice } from "../../components/CoffeePrice";
import { Button } from "../../components/Button";
import { CartItem } from "../../components/CartItem";

import { useCart } from "../../hooks/useCart";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";

export function ShoppingCart() {
  const { totalValue, cart, remove } = useCart();

  const navigation = useNavigation();
  const swipeableRefs = useRef<Swipeable[]>([]);

  function handleRemove(id: string, index: number) {
    swipeableRefs.current[index].close();

    remove(id);
  }

  function handleViewCoffees() {
    navigation.navigate("home");
  }

  function handleCompleteOrder() {
    navigation.navigate("order_completed");
  }

  return (
    <View style={styles.container}>
      <NavHeader title="Carrinho" variant="light" />

      <ScrollView
        contentContainerStyle={[
          styles.scrollViewContainer,
          { borderTopWidth: cart.length > 0 ? 1 : 0 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {cart.length === 0 && (
          <Animated.View
            entering={ZoomIn.duration(400).delay(300)}
            layout={Layout.springify().duration(400)}
            style={styles.emptyContainer}
          >
            <View style={styles.contentEmpty}>
              <ShoppingCartPhosphor color={THEME.COLORS.BASE_GRAY_500} weight="fill" />
              <Text style={styles.textEmptyContainer}>Seu carrinho está vazio</Text>
            </View>
            <Button label="VER CATÁLOGO" variant="purple" onPress={handleViewCoffees} />
          </Animated.View>
        )}

        {cart.map((item, index) => (
          <Animated.View
            key={item.id}
            entering={SlideInRight.duration(600).delay(200 * index)}
            exiting={SlideOutRight.duration(400)}
            layout={Layout.springify().duration(400)}
          >
            <Swipeable
              ref={(ref) => {
                if (ref) {
                  swipeableRefs.current.push(ref);
                }
              }}
              overshootLeft={false}
              containerStyle={styles.swipeableContainer}
              leftThreshold={150}
              onSwipeableOpen={() => handleRemove(item.id, index)}
              renderRightActions={() => null}
              renderLeftActions={() => (
                <View style={styles.swipeableRemove}>
                  <Trash size={32} color={THEME.COLORS.ERROR_RED_DARK} />
                </View>
              )}
            >
              <CartItem cart={item} />
            </Swipeable>
          </Animated.View>
        ))}
      </ScrollView>

      {cart.length > 0 && (
        <Animated.View
          entering={SlideInDown.duration(500)}
          exiting={SlideOutDown.duration(600)}
          layout={Layout.springify().duration(400)}
          style={styles.containerConfirmOrder}
        >
          <View style={styles.confirmOrderContent}>
            <Text style={styles.confirmOrderText}>Valor total</Text>
            <CoffeePrice size="md" price={totalValue} variant="dark" />
          </View>
          <Button
            label="CONFIRMAR PEDIDO"
            variant="yellow"
            onPress={handleCompleteOrder}
          />
        </Animated.View>
      )}
    </View>
  );
}
