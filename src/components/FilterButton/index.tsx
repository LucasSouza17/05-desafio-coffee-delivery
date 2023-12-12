import { useEffect } from "react";
import { Pressable, PressableProps } from "react-native";
import Animated, { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
const PressableAnimated = Animated.createAnimatedComponent(Pressable);

import { styles } from "./styles";
import { THEME } from "../../styles/theme";

type Props = PressableProps & {
  title: string;
  isChecked?: boolean;
};

export function FilterButton({title, isChecked, ...rest}: Props) {
  const scale = useSharedValue(1);
  const checked = useSharedValue(1);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      backgroundColor: interpolateColor(checked.value, [0, 1], ["transparent", THEME.COLORS.BRAND_PURPLE]),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(checked.value, [0, 1], [THEME.COLORS.BRAND_PURPLE_DARK, THEME.COLORS.BASE_WHITE]),
    };
  });


  function onPressIn() {
    scale.value = withTiming(0.8, { easing: Easing.bounce });
  }

  function onPressOut() {
    scale.value = withTiming(1, { easing: Easing.bounce });
  }

  useEffect(() => {
    checked.value = withTiming(isChecked ? 1 : 0);
  }, [isChecked]);

  return (
    <PressableAnimated
    onPressIn={onPressIn}
    onPressOut={onPressOut}
    style={[styles.container, { borderColor: THEME.COLORS.BRAND_PURPLE }, animatedContainerStyle]}
    {...rest}
  >
    <Animated.Text style={[styles.title, animatedTextStyle]}>{title}</Animated.Text>
  </PressableAnimated>
  )
}