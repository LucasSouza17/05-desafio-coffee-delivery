import { useEffect } from "react";
import { View, Image, Dimensions } from "react-native";
import Animated, {
  Easing,
  Layout,
  SlideInRight,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import LogoIcon from "../../assets/coffeLogoIcon.svg";
import LogoText from "../../assets/coffeLogoText.svg";

import { styles } from "./styles";
import { THEME } from "../../styles/theme";

type Props = {
  onFinished: (isFinished: boolean) => void;
};

export function Splash({ onFinished }: Props) {
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
      width: interpolate(backgroundColor.value, [0, 1], [0, SCREEN_HEIGHT * 1.5]),
      height: interpolate(backgroundColor.value, [0, 1], [0, SCREEN_HEIGHT * 1.5]),
      borderRadius: (SCREEN_HEIGHT * 1.5) / 2,
    };
  });

  const animatedLogoTextStyle = useAnimatedStyle(() => {
    return {
      display: coffeLogoText.value > 0 ? "flex" : "none",
      marginLeft: interpolate(coffeLogoText.value, [0, 1], [0, 15]),
    };
  });

  function onFinishedSplashAnimation() {
    setTimeout(() => {
      onFinished(true);
    }, 500);
  }

  useEffect(() => {
    backgroundColor.value = withTiming(
      1,
      { easing: Easing.ease, duration: 1500 },
      (finished) => {
        if (finished) {
          coffeLogoText.value = withTiming(
            1,
            { easing: Easing.bounce, duration: 1500 },
            (finished) => {
              "worklet";
              if (finished) {
                runOnJS(onFinishedSplashAnimation)();
              }
            }
          );
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
