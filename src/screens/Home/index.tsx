import { useRef, useState } from "react";
import { View, Text, Image, SectionList } from "react-native";
import Animated, {
  SlideInUp,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { HighlightList } from "../../components/HighlightList";
import { CoffeeList } from "../../components/CoffeeList";
import { CoffeeListHeader } from "../../components/CoffeeListHeader";

import CoffeeBeans from "../../assets/coffeebeans.png";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";
import { COFFEES } from "../../data/coffees";

const ITEM_HEIGHT = 180
const HEADER_HEIGHT = 540

export function Home() {
  const scrollY = useSharedValue(0);
  const flatListRef = useRef<any>(null);
  const sectionListRef = useRef<any>(null);

  const [search, setSearch] = useState<string>("");
  const [selectedFilterByScroll, setSelectedFilterByScroll] = useState<string>("");

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

  function onSelectFilterByScrollingSectionList(titleList: string) {
    setSelectedFilterByScroll(titleList)
  }

  const getFlatListOffset = (selectedIndex: number) => {
    let offset = 0;

    for (let i = 0; i < selectedIndex; i++) {
      offset += COFFEES[i].data.length * ITEM_HEIGHT; // Ajuste conforme necessário
    }

    return offset + HEADER_HEIGHT;
  };

  const handleScrollToCoffeeSection = (sectionIndex: number) => {
    const offset = getFlatListOffset(sectionIndex);
    flatListRef.current?.scrollToOffset({ offset, animated: true });
  };

  return (
    <View style={styles.container}>
      <Header animatedScrollY={scrollY} />

      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandler}
        stickyHeaderIndices={[1]}
        data={["0", "1", "2"]}
        renderItem={({ index }) => {
          if (index === 0)
            return (
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
            );
          if (index === 1)
            return <CoffeeListHeader onChangeFilter={handleScrollToCoffeeSection} selectedFilterByScrollIndex={selectedFilterByScroll} />;
          if (index === 2) return (
            <CoffeeList ref={sectionListRef} onViewableItemsChanged={({viewableItems}) => {onSelectFilterByScrollingSectionList(viewableItems[1].section.title), console.log(viewableItems[0].index)}} />
          );
          return <></>;
        }}
      />
    </View>
  );
}
