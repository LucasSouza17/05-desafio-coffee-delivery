import { Text, TouchableOpacity, View } from "react-native";
import { ArrowRight } from "phosphor-react-native";

import { Cart } from "../Cart";
import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import Animated, {
  SlideInDown,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  data: {
    amount: number;
    size: string;
    title: string;
  };
};

export function ToastCart({ data }: Props) {
  const navigation = useNavigation();

  const bottomValue = useSharedValue(-100);

  const containerAnimated = useAnimatedStyle(() => {
    return {
      bottom: bottomValue.value,
    };
  });

  function handleGoToShoppingCart() {
    navigation.navigate("shopping_cart");
  }

  useEffect(() => {
    bottomValue.value = withSequence(
      withTiming(0, { duration: 600 }),
      withDelay(3500, withTiming(-100, { duration: 600 }))
    );
  }, [data]);

  return (
    <Animated.View style={[styles.container, containerAnimated]}>
      <Cart variant="filled" />
      <Text style={styles.textInfo}>
        {data.amount} café <Text style={styles.strong}>{data.title}</Text> de{" "}
        <Text style={styles.strong}>{data.size}</Text> adicionado ao carrinho
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.actionContainer}
        onPress={handleGoToShoppingCart}
      >
        <Text style={[styles.strong, styles.textAction]}>VER</Text>
        <ArrowRight size={16} color={THEME.COLORS.BRAND_PURPLE} />
      </TouchableOpacity>
    </Animated.View>
  );
}
