import { View } from "react-native";
import { CoffeeData } from "../../@types/coffee";
import { styles } from "./styles";
import Animated, {
  Easing,
  Extrapolate,
  SharedValue,
  SlideInLeft,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Tag } from "../Tag";
import { CoffeeTitle } from "../CoffeeTitle";
import { CoffeeDescription } from "../CoffeeDescription";
import { CoffeePrice } from "../CoffeePrice";

type Props = {
  coffee: CoffeeData;
  index: number;
  scrollX: SharedValue<number>;
};

export function CoffeeCardHighlight({ coffee, index, scrollX }: Props) {
  const inputRange = [(index - 1) * 160, index * 160, (index + 1) * 160];

  const containerAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(interpolate(scrollX.value, inputRange, [0.80, 1, 0.80], Extrapolate.CLAMP), {duration: 50, easing: Easing.ease}),
        },
      ],
    };
  });

  const imageAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: withTiming(interpolate(scrollX.value, inputRange, [64, 120, 64], Extrapolate.CLAMP), {duration: 400}),
      height:  withTiming(interpolate(scrollX.value, inputRange, [64, 120, 64], Extrapolate.CLAMP),{duration: 400}),
      marginTop:  withTiming(interpolate(scrollX.value, inputRange, [-15, -40, -15], Extrapolate.CLAMP), {duration: 600}),
    };
  });

  return (
    <Animated.View style={[styles.container, containerAnimatedStyles]}>
      <Animated.Image source={coffee.image} style={[styles.image, imageAnimatedStyles]} />

      <View style={styles.content}>
        <Tag label={coffee.type_label} />
        
        <View style={styles.textsContainer}>
          <CoffeeTitle label={coffee.title} textAlign="center" />
          <CoffeeDescription label={coffee.description} textAlign="center" />
        </View>

        <CoffeePrice price={coffee.price} />
      </View>
    </Animated.View>
  );
}
