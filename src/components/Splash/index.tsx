import { useEffect } from "react";
import { View, Image, Dimensions } from "react-native";
import Animated, {
  Easing,
  Layout,
  SlideInRight,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import LogoIcon from "../../assets/coffeLogoIcon.svg";
import LogoText from "../../assets/coffeLogoText.svg";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";

export function Splash() {
  const backgroundColor = useSharedValue(0);
  const coffeLogoText = useSharedValue(0);

  const SCREEN_HEIGHT = Dimensions.get("window").height;

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        backgroundColor.value,
        [0, 1],
        [THEME.COLORS.BRAND_PURPLE_DARK, THEME.COLORS.BRAND_PURPLE]
      ),
      width: interpolate(backgroundColor.value, [0, 1], [0, SCREEN_HEIGHT * 2]),
      height: interpolate(backgroundColor.value, [0, 1], [0, SCREEN_HEIGHT * 2]),
      borderRadius: SCREEN_HEIGHT / 2,
    };
  });

  const animatedLogoTextStyle = useAnimatedStyle(() => {
    return {
      display: coffeLogoText.value > 0 ? "flex" : "none",
      marginLeft: interpolate(coffeLogoText.value, [0, 1], [0, 15])
    };
  });

  useEffect(() => {
    backgroundColor.value = withTiming(
      1,
      { easing: Easing.linear, duration: 1000 },
      (isFinished) => {
        if (isFinished) {
          coffeLogoText.value = withTiming(1, { easing: Easing.bounce, duration: 1500 });
        }
      }
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedContainerStyle]} />
      <Animated.View style={styles.logoContainer} layout={Layout.springify()}>
        <LogoIcon />
        <Animated.View style={[animatedLogoTextStyle]}>
          <LogoText />
        </Animated.View>
      </Animated.View>
    </View>
  );
}
