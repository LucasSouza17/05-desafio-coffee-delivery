import { View, Text, Image, Dimensions } from "react-native";
import Animated, {
  SlideInUp,
  interpolateColor,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

import CoffeeBeans from "../../assets/coffeebeans.png";
import { useRef, useState } from "react";
import { HighlightList } from "../../components/HighlightList";
import { Tag } from "../../components/Tag";
import { CoffeeList } from "../../components/CoffeeList";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export function Home() {
  const [search, setSearch] = useState<string>("");
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const scrollRef = useRef<Animated.ScrollView>(null);

  const scrollY = useSharedValue(0);

  function handleEnableScroll() {
    setScrollEnabled(true);
  }

  function handleDisableScroll() {
    setScrollEnabled(false);
  }

  function handleScrollToTop() {
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
      ("worklet");
      if (event.contentOffset.y >= 400) {
        runOnJS(handleDisableScroll)();
      } else {
        runOnJS(handleEnableScroll)();
      }
    },
  });

  const searchContainerStylesAnimated = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 420],
        [THEME.COLORS.BASE_GRAY_100, THEME.COLORS.BASE_GRAY_900]
      ),
    };
  });

  const onPan = Gesture.Pan().onUpdate((event) => {
    const moveToTop = event.translationY > 0;

    if (moveToTop) {
      ("worklet");
      runOnJS(handleScrollToTop)();
    }
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        stickyHeaderIndices={[0]}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        snapToAlignment="start"
        nestedScrollViews
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").height / 1.75}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
      >
        {/* Header (Localização & Carrinho) */}
        <Header animatedScrollY={scrollY} />

        <View>
          {/* Seção de pesquisa */}
          <Animated.View
            style={[styles.searchContainer, searchContainerStylesAnimated]}
            entering={SlideInUp.duration(400).stiffness(1)}
          >
            <Text style={styles.searchTitle}>
              Encontre o café perfeito para qualquer hora do dia
            </Text>
            <View style={{ position: "relative" }}>
              <Input
                placeholder="Pesquisar"
                value={search}
                onChangeText={(text) => setSearch(text)}
              />
              <Image source={CoffeeBeans} style={styles.coffeeBeansImage} />
            </View>
          </Animated.View>

          {/* Lista dos cafés em destaque */}
          <HighlightList />
        </View>

        <GestureDetector gesture={onPan}>
          <View
            style={{
              backgroundColor: THEME.COLORS.BASE_GRAY_900,
              paddingHorizontal: 32,
              paddingVertical: 16,
              gap: 12,
              borderBottomWidth: 1,
              borderBottomColor: THEME.COLORS.BASE_GRAY_800,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.05,
              shadowRadius: 0.8,

              elevation: 3,
            }}
          >
            <Text
              style={{
                color: THEME.COLORS.BASE_GRAY_300,
                fontFamily: THEME.FONTS.BOLD_BALOO2,
                fontSize: 16,
              }}
            >
              Nossos cafés
            </Text>
            <View style={{ alignItems: "flex-start", flexDirection: "row", gap: 8 }}>
              <Tag label="Tradicionais" />
              <Tag label="Doces" />
            </View>
          </View>
        </GestureDetector>
        <CoffeeList scrollEnabled={scrollEnabled} />
      </Animated.ScrollView>
    </View>
  );
}
