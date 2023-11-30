import { View, Text, TextInput, Image, FlatList } from "react-native";
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
        <Animated.View
          style={[styles.searchContainer, searchContainerStylesAnimated]}
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

        <FlatList
          data={COFFEES_HIGHTLIGHT}
          keyExtractor={(item) => String(item.id)}
          horizontal
          style={{ marginTop: -170 }}
          contentContainerStyle={{ gap: 8, marginLeft: 32 }}
          renderItem={({ item }) => {
            return (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={item.image}
                  style={{
                    width: 120,
                    height: 120,
                    marginTop: 0,
                    zIndex: 100,
                    top: 90
                  }}
                />
                <View
                  style={{
                    position: "relative",
                    paddingHorizontal: 16,
                    paddingBottom: 20,
                    borderTopLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopRightRadius: 36,
                    borderBottomLeftRadius: 36,
                    backgroundColor: "#FFF",
                    width: 208,
                    height: 262,
                    alignItems: "center",
                    paddingTop: 90
                  }}
                >
                  <Text style={{ textAlign: "center", marginTop: 16 }}>
                    Café expresso com o dobro de leite e espuma cremosa
                  </Text>
                </View>
              </View>
            );
          }}
        />

        <View style={{ width: 100, height: 250, marginTop: 16, backgroundColor: "#000" }} />
        <View
          style={{ width: 100, height: 1500, backgroundColor: "#045923" }}
        />
      </Animated.ScrollView>
    </View>
  );
}
