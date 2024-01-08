import { useEffect } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const PressableAnimated = Animated.createAnimatedComponent(Pressable);

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

type Props = PressableProps & {
  label: string;
  isSelected?: boolean;
};

export function SizeButton({ label, isSelected = false, ...rest }: Props) {
  const scale = useSharedValue(1);
  const checked = useSharedValue(0);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      borderColor: interpolateColor(
        checked.value,
        [0, 1],
        ["transparent", THEME.COLORS.BRAND_PURPLE]
      ),
      borderWidth: interpolate(checked.value, [0, 1], [0, 1]),
      backgroundColor: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.BASE_GRAY_700, "transparent"]
      ),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        checked.value,
        [0, 1],
        [THEME.COLORS.BASE_GRAY_300, THEME.COLORS.BRAND_PURPLE]
      ),
      fontWeight: checked.value === 0 ? "normal" : "bold",
    };
  });

  function onPressIn() {
    scale.value = withTiming(0.8, { easing: Easing.bounce });
  }

  function onPressOut() {
    scale.value = withTiming(1, { easing: Easing.bounce });
  }

  useEffect(() => {
    checked.value = withTiming(isSelected ? 1 : 0, {duration: 100});
  }, [isSelected]);

  return (
    <PressableAnimated
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[styles.container, animatedContainerStyle]}
      {...rest}
    >
      <Animated.Text style={[animatedTextStyle]}>{label}</Animated.Text>
    </PressableAnimated>
  );
}
