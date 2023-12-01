import { Image, Text, View } from "react-native";
import { CoffeeData } from "../../@types/coffee";
import { styles } from "./styles";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import { THEME } from "../../styles/theme";

type Props = {
  coffee: CoffeeData;
  index: number;
  scrollX: SharedValue<number>;
};

export function CoffeeCardHighlight({ coffee, index, scrollX }: Props) {
  const inputRange = [(index - 1) * 176, index * 176, (index + 1) * 176];

  const containerAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollX.value, inputRange, [0.80, 1, 0.80]),
        },
      ],
    };
  });

  const imageAnimatedStyles = useAnimatedStyle(() => {
    return {
      width: interpolate(scrollX.value, inputRange, [64, 120, 64]),
      height: interpolate(scrollX.value, inputRange, [64, 120, 64]),
      marginTop: interpolate(scrollX.value, inputRange, [-15, -40, -15]),
    };
  });

  return (
    <Animated.View style={[styles.container, containerAnimatedStyles]}>
      <Animated.Image source={coffee.image} style={[styles.image, imageAnimatedStyles]} />

      <View style={{marginTop: 8, alignItems: 'center'}}>
        <View style={{borderRadius: 50, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: THEME.COLORS.BRAND_PURPLE_LIGHT, alignSelf: 'center'}}>
          <Text style={{fontFamily: THEME.FONTS.BOLD_ROBOTO, fontSize: 10, fontWeight: "700", color: THEME.COLORS.BRAND_PURPLE_DARK}}>{coffee.type_label}</Text>
        </View>
        
        <View style={{marginTop: 14, gap: 4, alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontFamily: THEME.FONTS.BOLD_BALOO2, color: THEME.COLORS.BASE_GRAY_200, textAlign: 'center', lineHeight: 24}}>{coffee.title}</Text>
          <Text style={{fontSize: 12, fontFamily: THEME.FONTS.REGULAR, color: THEME.COLORS.BASE_GRAY_400, textAlign: 'center'}}>{coffee.description}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'baseline', marginTop: 18, gap: 2}}>
          <Text style={{fontSize: 14, fontFamily: THEME.FONTS.REGULAR, color: THEME.COLORS.BRAND_YELLOW_DARK}}>R$</Text>
          <Text style={{fontSize: 24, fontFamily: THEME.FONTS.BOLD_BALOO2, color: THEME.COLORS.BRAND_YELLOW_DARK}}>{coffee.price}0</Text>
        </View>
      </View>
    </Animated.View>
  );
}
