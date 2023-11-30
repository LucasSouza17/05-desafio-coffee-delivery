import { View, Text, TextInput, Image } from "react-native";
import Animated, {
  FadeInUp,
  Keyframe,
  SlideInUp,
  StretchInY,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { THEME } from "../../styles/theme";

import CoffeeBeans from "../../assets/coffeebeans.png";
import { useEffect } from "react";

export function Home() {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const keyframeEntering = new Keyframe({
    from: {
      height: 0
    },
    to: {
      height: 266
    }
  })

  const searchContainerStylesAnimated = useAnimatedStyle(() => {
    console.log(scrollY.value)
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 420],
        [THEME.COLORS.BASE_GRAY_100, THEME.COLORS.BASE_GRAY_900]
      ),
    };
  });

  return (
    <View style={styles.container}>
      <Header animatedScrollY={scrollY} />
      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <Animated.View style={[styles.searchContainer, searchContainerStylesAnimated]} entering={FadeInUp.duration(300)}>
          <Text style={styles.searchTitle}>
            Encontre o café perfeito para qualquer hora do dia
          </Text>
          <View style={{position: "relative"}}>
            <TextInput
              style={{
                height: 42,
                backgroundColor: THEME.COLORS.BASE_GRAY_200,
                borderRadius: 4,
                paddingLeft: 8,
              }}
              placeholder="Pesquisar"
              placeholderTextColor={THEME.COLORS.BASE_GRAY_400}
            />
            <Image source={CoffeeBeans} style={{ position: "absolute", bottom: -82, right: -32, width: 82, height: 82 }} />
          </View>
        </Animated.View>

        <View style={{width: 100, height: 250, backgroundColor: "#000"}} />
        <View style={{width: 100, height: 1500, backgroundColor: "#045923"}} />
      </Animated.ScrollView>
    </View>
  );
}
