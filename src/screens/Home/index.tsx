import { View, Text, TextInput, Image, FlatList, Dimensions } from "react-native";
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

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

import CoffeeBeans from "../../assets/coffeebeans.png";
import { useState } from "react";
import { COFFEES_HIGHTLIGHT } from "../../data/coffeesHightlight";
import { CoffeeCardHighlight } from "../../components/CoffeeCardHighlight";
import { HighlightList } from "../../components/HighlightList";

export function Home() {
  const [search, setSearch] = useState<string>("");

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
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

  return (
    <View style={styles.container}>
      {/* Header (Localização & Carrinho) */}
      <Header animatedScrollY={scrollY} />

      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        {/* Seção de pesquisa */}
        <Animated.View style={[styles.searchContainer, searchContainerStylesAnimated]}>
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

        <HighlightList />

        <View
          style={{ width: 100, height: 250, marginTop: 16, backgroundColor: "#000" }}
        />
        <View style={{ width: 100, height: 1500, backgroundColor: "#045923" }} />
      </Animated.ScrollView>
    </View>
  );
}
